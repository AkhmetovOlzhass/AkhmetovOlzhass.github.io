<?php 

$text1 = $_POST['text1'];
$check1 = $_POST['check1'];
$range1 = $_POST['range1'];
$name1 = $_POST['name1'];
$phone1 = $_POST['phone1'];
$email1 = $_POST['email1'];

$company = $_POST['company'];
$site = $_POST['site'];
$phone2 = $_POST['phone2'];
$email2 = $_POST['email2'];
$text2 = $_POST['text2'];
$radio = $_POST['radio'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = '';                 // Наш логин
$mail->Password = '';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('', 'Cargo');   // От кого письмо 
$mail->addAddress('');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Описание груза: ' . $text1 . ' <br>
	Номер телефона: ' . $phone1 . '<br>
	E-mail: ' . $email1 . ' <br>
	Растарможка: ' . $check1 . ' <br>
	Количество дней доставки: до ' . $range1 . ' <br>
	Имя: ' . $name1 . ' <br>
	Телефон: ' . $phone1 . ' <br>
	Почта: ' . $email1 . ' <br>';

$mail->Body    = '
		Пользователь оставил данные <br> 
	Название компании: ' . $company . ' <br>
	Сайт: ' . $site . '<br>
	Телефон: ' . $phone2 . ' <br>
	Почта: ' . $email2 . ' <br>
	Заявки отправлять: ' . $radio . ' <br>
	Информация для заказчиков: ' . $text2 . ' <br>';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>