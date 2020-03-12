<?
echo '1';
print_r($_POST);
return;
/*php
	$name = htmlspecialchars($_POST["name"]);
	$email = htmlspecialchars($_POST["phone"]);

$arr = array(
	'error' => [
			'tel' => 'какой телефон?',
			'name' => 'О_о',
	],
	'placeholder' => 1,
	'result' => 0
);
if($name&&$email){
	foreach ($_POST as $key=>$item){
			$message .= $key . ' - ' . $item . "\n";
	}
	$infoF = '';
	$infoF .= $_SERVER['REQUEST_SCHEME'].'://'.$_SERVER['SERVER_NAME'].'/wp-content'.$fI[1]."\n";
	$to      = 'mr.andrey@bigmir.net';
	$subject = "Зворотній зв'язок";
	$message .= $infoF;
	mail($to, $subject, $message);
   echo true;
}else {
   echo 0;
};*/?>

<?php



define('ID', 1); //  1 робочий
define('CRM_HOST', 'riverside-development.bitrix24.ua');// Домен срм системы smartorange.bitrix24.ru riverside-development.bitrix24.ua
define('CRM_PORT', '443');
define('CRM_PATH', '/crm/configs/import/lead.php');
define('CRM_LOGIN', 'gav.sqrt@gmail.com');  // логин
define('CRM_PASSWORD', '4561210_gav'); // пароль

/*
define('CRM_HOST', 'riverside-development.bitrix24.ua');
define('CRM_LOGIN', 'gav.sqrt@gmail.com');  // логин
define('CRM_PASSWORD', '4561210_gav'); // пароль
*/


$Server = 'smartora.mysql.tools';
$Login =  'smartora_bostcrm';
$Password = 'U5^45mzGf#';
$DataBase = 'smartora_bostcrm';

global $db;

$db = new MySQLi($Server, $Login, $Password, $DataBase);

$result = $db->query("Set charset utf8");
$result = $db->query("Set character_set_client = utf8");
$result = $db->query("Set character_set_connection = utf8");
$result = $db->query("Set character_set_results = utf8");
$result = $db->query("Set collation_connection = utf8_general_ci");

if (mysqli_connect_errno()) {
    printf("Подключение к серверу MySQL невозможно");
    exit;
}
/* переменные для проверки*/

function clear_phone($phone){
    if($phone{0}===0) {	$phone='38'.$phone;	}

    $phone = str_replace("(", " ", $phone);
    $phone = str_replace(")", " ", $phone);
    $phone = str_replace("-", " ", $phone);

    return $phone;
}

$utm=array(
    'utm_source' ,
    'utm_medium',
    'utm_campaign' ,
    'utm_term',
    'utm_content',
    'clientId'
);
$utms=array();
foreach($utm as $key=>$t)
{
    if (isset($_SESSION[$t]))
    {
        $utms[]=$_SESSION[$t];
    }
    else
    {
        $utms[]='no_utm';
    }
}

$day = date("Y-m-d H:i:s",strtotime("-1 hour"));
$name = (isset($_POST['name'])) ? htmlspecialchars(@$_POST['name']) : '';
$email = htmlspecialchars(@$_POST['email']);
$phone = htmlspecialchars(clear_phone(@$_POST['phone']));
$kv = htmlspecialchars(@$_POST['kv']);
$count = @$_POST['count'];
$typs = @$_POST['typ'];
$when = htmlspecialchars(@$_POST['when']);



$dat = date("Y-m-d H:i:s");
$time = date("H:i:s");
$good = 0;


/********************************************************************************************/
if(empty($_POST['message']))  $_POST['message'] = $_POST['metka'];


if ($_SERVER['REQUEST_METHOD'] == 'POST') {


    if ($count<2 || empty($name)) {

        return returnJson([	'error' => ['name' => "Впишіть ваше ім'я"], 'result' => 0]);

    } else  {

        $message = @$_POST['message'];


        // получаем данные из полей и задаем название лида
        $postData = array(
            'TITLE' => @$_POST['metka'], // сохраняем нашу метку и формируем заголовок лида
            'NAME' => @$_POST['name'],   // сохраняем имя
            'PHONE_WORK' =>$phone, // сохраняем телефон
            'EMAIL_WORK' => @$_POST['email'], // сохраняем почту
            'UF_CRM_1485774805' => @$_POST['inn'], // сохраняем ИНН UF_CRM_1485437157
            'ASSIGNED_BY_ID' => ID,
            'ADDRESS' => @$_POST['webad'],
            'UF_CRM_1485774841' => $when, //UF_CRM_1485510398
            'UF_CRM_1485774828' => $message, //UF_CRM_1485507619
            'UF_CRM_1517487869'=>$utms[0],
            'UF_CRM_1517487957'=>$utms[1],
            'UF_CRM_1517488014'=>$utms[2],
            'UF_CRM_1517489120'=>$utms[3],
            'UF_CRM_1517489335'=>$utms[4],
            'UF_CRM_1542115719'=>$utms[5],
        );

        function addintbd($name = null, $phone = null, $formData = null, $typs = 0, $kv = null, $crm=0){ GLOBAL $db;

            date_default_timezone_set('Europe/Kiev');
            $today = date("Y-m-d H:i:s");
            $ip=$_SERVER["REMOTE_ADDR"];

            $phone = clear_phone(@$_POST['phone']);

            $name = @$_POST['name'];
            $formData = @$_POST['message'];
            $email = @$_POST['email'];
            $typs = @$_POST['typ'];

            $result = $db->query("INSERT INTO `calls` (`dates`, `ip`, `name`, `fhonenumber`, `texts`, `typs`, `email`,`kv`,`crm`) VALUES ('$today', '$ip', '$name', '$phone', '$formData', '$typs', '$email','$kv','$crm')");
            return $db->insert_id;


        }

        // авторизация, проверка логина и пароля
        if (defined('CRM_AUTH')) {

            $postData['AUTH'] = CRM_AUTH;
        } else {

            $postData['LOGIN'] = CRM_LOGIN;
            $postData['PASSWORD'] = CRM_PASSWORD;
        }

        $fp = fsockopen("ssl://".CRM_HOST, CRM_PORT, $errno, $errstr, 30);

        if ($fp) {
            $insert_id=addintbd();
            if ($good == 1) {
                // если 1 то номер есть в базе и за последний час человек оставлял заявку и мы его записываем в базу но не шлем в CRM

                return returnJson(['message' => 'Повідомлення надіслано', 'result' => 1]);

            } else {

                //если такого номера нет или он не звонил за последний час, добавляем в базу и отправляем в CRM

                // отправляем запрос в срм систему

                // формируем и шифруем строку с данными из формы
                $strPostData = '';
                foreach ($postData as $key => $value)
                    $strPostData .= ($strPostData == '' ? '' : '&').$key.'='.urlencode($value);
                $str = "POST ".CRM_PATH." HTTP/1.0\r\n";
                $str .= "Host: ".CRM_HOST."\r\n";
                $str .= "Content-Type: application/x-www-form-urlencoded\r\n";
                $str .= "Content-Length: ".strlen($strPostData)."\r\n";
                $str .= "Connection: close\r\n\r\n";

                $str .= $strPostData;


                fwrite($fp, $str );
                $result = '';
                while (!feof($fp))
                {
                    $result .= fgets($fp, 128);
                }
                fclose($fp);

                $response = explode("\r\n\r\n", $result);
                $output = '<pre>'.print_r($response[1], 1).'</pre>';

                $error=str_replace("'", '"',$response[1]);
                $error=json_decode($error);


                $crm = ($error->error)? $error->error : $crm=0;

                if ($error->error != 201) {

                    $path = $_SERVER['DOCUMENT_ROOT']."/log/call.log";

                    file_put_contents($path, $error, FILE_APPEND);
                }

                $result = $db->query("UPDATE `calls` SET `crm` = $crm WHERE `id` = $insert_id;");

                return returnJson(['message' => 'Повідомлення надіслано', 'result' => 1]);
            }

        } else {

            return returnJson(['message' => 'Connection Failed!', 'result' => 0]);

        }

    }
}


function returnJson($array = null){

    echo json_encode($array);
}


