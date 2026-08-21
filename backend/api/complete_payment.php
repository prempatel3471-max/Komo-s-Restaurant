<?php
require_once __DIR__ . '/_bootstrap.php';
$data = request_json();
$orderId = filter_var($data['order_id'] ?? null, FILTER_VALIDATE_INT);
$method = trim((string)($data['payment_method'] ?? ''));

if (!$orderId) fail_json('Invalid order.');
if (!in_array($method, ['UPI', 'Card', 'Cash'], true)) fail_json('Invalid payment method.');

try {
    $pdo->beginTransaction();
    $find = $pdo->prepare('SELECT id, order_number, total, payment_status FROM orders WHERE id = ? FOR UPDATE');
    $find->execute([$orderId]);
    $order = $find->fetch();
    if (!$order) fail_json('Order not found.');
    if ($order['payment_status'] === 'Paid') fail_json('This order has already been paid.');

    $txn = 'PAY-' . date('YmdHis') . '-' . strtoupper(bin2hex(random_bytes(3)));
    $insert = $pdo->prepare('INSERT INTO payments (order_id, transaction_id, payment_method, amount, status) VALUES (?, ?, ?, ?, ?)');
    $insert->execute([$orderId, $txn, $method, $order['total'], 'Paid']);

    $update = $pdo->prepare('UPDATE orders SET payment_status = ?, status = ?, paid_at = NOW() WHERE id = ?');
    $update->execute(['Paid', 'Confirmed', $orderId]);
    $pdo->commit();

    echo json_encode(['success' => true, 'message' => 'Payment recorded successfully.', 'transaction_id' => $txn]);
} catch (Throwable $e) {
    if ($pdo->inTransaction()) $pdo->rollBack();
    fail_json('Could not complete payment.', 500);
}
