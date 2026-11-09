<?php
// Backend: tylko wysyłka maila z formularza kontaktowego
// Wymaga: PHP z włączoną funkcją mail() lub SMTP. Na hostingu shared działa od ręki.

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Metoda niedozwolona']);
    exit;
}

$input = json_decode(file_get_contents('php://input'), true) ?: $_POST;

$name    = trim($input['name']    ?? '');
$email   = trim($input['email']   ?? '');
$message = trim($input['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Wypełnij wszystkie pola']);
    exit;
}

// Prosta walidacja e-mail
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Nieprawidłowy adres e-mail']);
    exit;
}

$to = 'kontakt@deszczowka.io';
$subject = 'Nowa wiadomość z formularza kontaktowego — deszczowka.io';
$body = <<<EMAIL
Nowa wiadomość z formularza kontaktowego na deszczowka.io:

Imię i nazwisko: $name
E-mail: $email

Wiadomość:
$message

---
Wysłane ze strony deszczowka.io
EMAIL;

$headers = [
    "From: $name <$email>",
    "Reply-To: $email",
    "Content-Type: text/plain; charset=UTF-8",
];

$ok = mail($to, $subject, $body, implode("\r\n", $headers));

if ($ok) {
    echo json_encode(['ok' => true]);
} else {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Nie udało się wysłać wiadomości']);
}
