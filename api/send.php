<?php
// send.php

header('Content-Type: application/json');

// Получаем данные из формы
$name = trim($_POST['name']);
$phone = trim($_POST['phone']);
$email = trim($_POST['email']);
$message = trim($_POST['message']);
$url = trim($_POST['url']);  // URL страницы

// Валидация на сервере
if (empty($name) || empty($phone) || empty($email) || empty($message) || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Некорректные данные']);
    exit;
}

// Telegram Bot Token и Chat ID
$token = "7468492860:AAEd2dvjmZeMkOEuWVZFqIwErfPaeBwlBx4";  // Укажи свой токен
$chat_id = "6737551184";  // Укажи свой Chat ID

// Получаем текущие дату и время
$date = date("d.m.Y");
$time = date("H:i");

// Формируем текст сообщения
$telegramMessage = "Новая заявка с сайта\n"
    . "Имя: $name\n"
    . "Телефон: $phone\n"
    . "Почта: $email\n"
    . "Сообщение: $message\n"
    . "Дата: $date\n"
    . "Время: $time\n"
    . "URL страницы: $url";

// Отправляем сообщение в Telegram
$telegramUrl = "https://api.telegram.org/bot$token/sendMessage";
$response = file_get_contents($telegramUrl . "?chat_id=$chat_id&text=" . urlencode($telegramMessage));

// Проверяем, что сообщение отправлено успешно
if ($response) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'Ошибка при отправке']);
}
?>