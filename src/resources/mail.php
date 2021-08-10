<?php

$method = $_SERVER['REQUEST_METHOD'];

var_dump($_POST);
var_dump($_GET);

//Script Foreach
$c = true;
if ( $method === 'POST' ) {

	$name = trim($_POST["name"]);
	$email  = trim($_POST["email"]);
	$subject = trim($_POST["subject"]);

	foreach ( $_POST as $key => $value ) {
		if ( $value != "" && $key != "name" && $key != "email" && $key != "subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
} else if ( $method === 'GET' ) {

	$name = trim($_GET["name"]);
	$email  = trim($_GET["email"]);
	$subject = trim($_GET["subject"]);

	foreach ( $_GET as $key => $value ) {
		if ( $value != "" && $key != "name" && $key != "email" && $key != "subject" ) {
			$message .= "
			" . ( ($c = !$c) ? '<tr>':'<tr style="background-color: #f8f8f8;">' ) . "
				<td style='padding: 10px; border: #e9e9e9 1px solid;'><b>$key</b></td>
				<td style='padding: 10px; border: #e9e9e9 1px solid;'>$value</td>
			</tr>
			";
		}
	}
}

$message = "<table style='width: 100%;'>$message</table>";

function adopt($text) {
	return '=?UTF-8?B?'.Base64_encode($text).'?=';
}

$headers = "MIME-Version: 1.0" . PHP_EOL .
"Content-Type: text/html; charset=utf-8" . PHP_EOL .
'From: '.adopt($name).' <'.$email.'>' . PHP_EOL .
'Reply-To: '.$email.'' . PHP_EOL;

mail($email, adopt($subject), $message, $headers );
