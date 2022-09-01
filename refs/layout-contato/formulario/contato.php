
<meta http-equiv="refresh" content="5; URL=http://www.meusite.com.br" />

<meta charset="utf-8">



<body style="background:#FFF">



<?



include("phpmailer/class.phpmailer.php");


header("Content-Type: text/html; charset=utf-8",true);

//instancia a objetos

$mail = new PHPMailer();

// mandar via SMTP

$mail->IsSMTP(); 

// Seu servidor smtp

$mail->Host = "mail.eraconectada.com.br"; 

// habilita smtp autenticado

$mail->SMTPAuth = true; 

// usuário deste servidor smtp

$mail->Username = "contato@eraconectada.com.br"; 

$mail->Password = "minhasenha"; // senha

//email utilizado para o envio 

//pode ser o mesmo de username

$mail->From = "contato@eraconectada.com.br";

$mail->FromName = "Era Conectada";



//Enderecos que devem ser enviadas as mensagens

$mail->AddAddress("contato@eraconectada.com.br","Era Conectada");

//$mail->AddAddress("outroEmail@SEUDOMINIO.com.br","Contato");

//wrap seta o tamanhdo do texto por linha

$mail->WordWrap = 50; 

//anexando arquivos no email

$mail->AddAttachment("anexo/arquivo.zip"); 

$mail->AddAttachment("imagem/foto.jpg");

$mail->IsHTML(true); //enviar em HTML



// recebendo os dados od formulario

if(isset($_POST['nome'])){

	$nome     = ucwords($_POST['nome']);

	$email 	  = $_POST['email'];

	$telefone 	  = $_POST['telefone'];

	$setor 	  = $_POST['setor'];

	$mensagem   = $_POST['mensagem'];

    // informando a quem devemos responder 

	//ou seja para o mail inserido no formulario

	$mail->AddReplyTo("$email","$nome");

	//criando o codigo html para enviar no email

	//vocepode utilizar qualquer tag html ok


	$msg  = "";

	$msg .= "<b> Nome:</b> $nome<br>\n";

	$msg .= "<b> E-mail:</b> $email<br>\n";

	$msg .= "<b> Telefone:</b> $telefone<br>\n";

	$msg .= "<b> Setor:</b> $setor<br>\n";

	
	$msg .= "<b> Mensagem:</b> $mensagem<br>\n";

 }

 $mail->CharSet = 'utf-8';

$mail->Subject = "Formulario de Contato";

//adicionando o html no corpo do email

$mail->Body = $msg;

//enviando e retornando o status de envio









if(!$mail->Send())

{

echo "<P>houve um erro ao  enviar o email! </P>".$mail->ErrorInfo;

//$mail->ErrorInfo informa onde ocorreu o erro 

exit;

}

echo "<div style='margin:100px auto; width:50%; text-align:center'><p><img src='imagens/marca.jpg' /></p><p style='font-family: Arial, Helvetica, sans-serif; color:#333; font-size:40px'>Recebemos os seus dados. Entraremos em contato o mais breve possível! </p><p style='font-family: Arial, Helvetica, sans-serif; color:#333; font-size:40px'> Obrigado!</p></div>";

?>
