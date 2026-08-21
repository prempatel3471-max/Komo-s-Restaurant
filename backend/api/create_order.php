<?php
require_once __DIR__ . '/_bootstrap.php';
$data = request_json();

$name = trim((string)($data['customer_name'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$orderType = trim((string)($data['order_type'] ?? ''));
$table = trim((string)($data['table_number'] ?? ''));
$address = trim((string)($data['delivery_address'] ?? ''));
$items = $data['items'] ?? [];

if ($name === '' || mb_strlen($name) > 100) fail_json('Please enter a valid customer name.');
if (!preg_match('/^[0-9+()\-\s]{7,20}$/', $phone)) fail_json('Please enter a valid phone number.');
if (!in_array($orderType, ['Dine-In', 'Takeaway', 'Delivery'], true)) fail_json('Invalid order type.');
if ($orderType === 'Dine-In' && $table === '') fail_json('Table number is required for Dine-In.');
if ($orderType === 'Delivery' && $address === '') fail_json('Delivery address is required.');
if (!is_array($items) || count($items) < 1) fail_json('Your cart is empty.');

try {
    $pdo->beginTransaction();
    $subtotal = 0.0;
    $totalItems = 0;
    $validatedItems = [];

    $stmt = $pdo->prepare('SELECT id, name, price FROM menu_items WHERE id = ? AND is_available = 1');

    foreach ($items as $item) {
        $id = filter_var($item['id'] ?? null, FILTER_VALIDATE_INT);
        $qty = filter_var($item['quantity'] ?? null, FILTER_VALIDATE_INT);
        if (!$id || !$qty || $qty < 1 || $qty > 99) fail_json('Invalid cart item.');

        $stmt->execute([$id]);
        $menu = $stmt->fetch();
        if (!$menu) fail_json('One of the selected dishes is unavailable.');

        $line = (float)$menu['price'] * $qty;
        $subtotal += $line;
        $totalItems += $qty;
        $validatedItems[] = ['id' => (int)$menu['id'], 'name' => $menu['name'], 'price' => (float)$menu['price'], 'quantity' => $qty, 'line_total' => $line];
    }

    $gst = round($subtotal * 0.05, 2);
    $total = round($subtotal + $gst, 2);
    $orderNumber = 'KOMO-' . date('Ymd') . '-' . strtoupper(bin2hex(random_bytes(3)));

    $insert = $pdo->prepare('INSERT INTO orders (order_number, customer_name, phone, order_type, table_number, delivery_address, subtotal, gst, total, status, payment_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)');
    $insert->execute([$orderNumber, $name, $phone, $orderType, $table ?: null, $address ?: null, $subtotal, $gst, $total, 'Pending Payment', 'Pending']);
    $orderId = (int)$pdo->lastInsertId();

    $itemInsert = $pdo->prepare('INSERT INTO order_items (order_id, menu_item_id, item_name, unit_price, quantity, line_total) VALUES (?, ?, ?, ?, ?, ?)');
    foreach ($validatedItems as $item) {
        $itemInsert->execute([$orderId, $item['id'], $item['name'], $item['price'], $item['quantity'], $item['line_total']]);
    }

    $pdo->commit();

    echo json_encode([
        'success' => true,
        'message' => 'Order created. Complete payment to confirm it.',
        'order' => [
            'id' => $orderId,
            'order_number' => $orderNumber,
            'order_type' => $orderType,
            'total_items' => $totalItems,
            'subtotal' => number_format($subtotal, 2, '.', ''),
            'gst' => number_format($gst, 2, '.', ''),
            'total' => number_format($total, 2, '.', '')
        ]
    ]);
} catch (Throwable $e) {
    if ($pdo->inTransaction()) $pdo->rollBack();
    fail_json('Could not create the order. Please try again.', 500);
}
