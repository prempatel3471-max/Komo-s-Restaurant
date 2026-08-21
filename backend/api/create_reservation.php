<?php
require_once __DIR__ . '/_bootstrap.php';
$data = request_json();

$name = trim((string)($data['name'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$guests = filter_var($data['guests'] ?? null, FILTER_VALIDATE_INT);
$date = trim((string)($data['date'] ?? ''));
$time = trim((string)($data['time'] ?? ''));

if ($name === '' || $phone === '' || !$guests || $guests < 1 || $guests > 50 || $date === '' || $time === '') fail_json('Please complete all reservation fields.');
if (!preg_match('/^\d{4}-\d{2}-\d{2}$/', $date)) fail_json('Invalid reservation date.');
if (!preg_match('/^\d{2}:\d{2}$/', $time)) fail_json('Invalid reservation time.');

try {
    $number = 'RES-' . date('Ymd') . '-' . strtoupper(bin2hex(random_bytes(3)));
    $stmt = $pdo->prepare('INSERT INTO reservations (reservation_number, customer_name, phone, guests, reservation_date, reservation_time, status) VALUES (?, ?, ?, ?, ?, ?, ?)');
    $stmt->execute([$number, $name, $phone, $guests, $date, $time, 'Pending']);
    echo json_encode(['success' => true, 'reservation_number' => $number]);
} catch (Throwable $e) {
    fail_json('Could not save reservation.', 500);
}
