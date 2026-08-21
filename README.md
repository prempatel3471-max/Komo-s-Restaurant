# Komo Restaurant — PHP + MySQL Backend

This version connects the existing Komo Restaurant ordering flow to a PHP/MySQL backend.

## Features
- Creates an order in MySQL before payment.
- Recalculates item prices and GST on the server (do not trust browser totals).
- Saves each order item.
- Opens the payment modal after the order is created.
- Records demo UPI/Card/Cash payment in MySQL.
- Confirms the order after payment is recorded.
- Saves reservations in MySQL.
- Uses prepared PDO statements.

## Run with XAMPP
1. Copy the `komo-restaurant` folder into `C:\xampp\htdocs\`.
2. Start **Apache** and **MySQL** in XAMPP.
3. Open `http://localhost/phpmyadmin/`.
4. Import `database/komo.sql`.
5. Check `backend/config.php` for your MySQL username/password.
6. Open `http://localhost/komo-restaurant/`.

## Important
The payment UI is a **demo payment flow**. It records a payment as paid in MySQL but does not move real money.

Before production, replace `complete_payment.php` with a real payment gateway integration (for example Razorpay), create the gateway order on the server, verify the gateway signature on the server, and only then mark the order as Paid.

## API endpoints
- `POST backend/api/create_order.php`
- `POST backend/api/complete_payment.php`
- `POST backend/api/create_reservation.php`
