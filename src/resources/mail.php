<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$email = $_POST['email'];
$message = $_POST['message'];

// Формирование самого письма
$title = "Новое предложение по работе!";
$body = "
<h2>Новое предложение по работе!</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Почта:</b> $email<br><br>
<b>Сообщение:</b><br>$message
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'konstantin.bogorodsky.phpmailer@gmail.com'; // Логин на почте
    $mail->Password   = 'JirWOW19IWNLswag06'; // Пароль на почте // Пароль приложения c пробелами
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('konstantin.bogorodsky.phpmailer@gmail.com', 'Константин Боогродский'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('konstantin.bogorodsky@gmail.com');  


// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: index.html');


