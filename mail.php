<?php
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];
  $to = 'nethoinkz@gmail.com';
  $from = 'noreply@lensvision.com';
  
  $headers = 'From: $from \r\n';
  $headers .= 'Reply-To: $email \r\n';

  $eSubj = 'LV - $subject';

  $eBody = 'Name: $name \n';
  $eBody .= 'Email: $email \n';
  $eBody .= 'Subject: $subject \n\n';
  $eBody .= '$message';

  if(mail($to,$eSubj,$eBody,$headers)) {
    echo 'mail sent.';
  } else {
    echo 'fail to send mail.';
  }
?>