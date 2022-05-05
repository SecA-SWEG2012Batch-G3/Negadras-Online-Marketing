<?php
	$dbname = "negadras";
	$dbhost = "localhost";
	$dbuser = "root";
	$dbpass = "";
	$sitenm = "Negadras";
	$mysqli = new mysqli($dbhost,$dbuser,$dbpass,$dbname);
	if(mysqli_connect_error()) 
	{
		printf("Connection failed:%s/n",mysqli_connect_error());
		exit();
	}
mysql_connect("$dbhost","$dbuser","$dbpass") or die("couldnt connect !");
	mysql_select_db("negadras") or die("couldnt connect to the Database");
$salt = "eliot";

function sanitizeString($val) {
		$val = htmlentities($val);
		$val = stripslashes($val);
		$val = strip_tags($val);
		return mysql_real_escape_string($val);
	}

if(isset($_COOKIE['negadrasuser'])) {
  $usr_new = $_COOKIE['negadrasuser'];
  for ($i=0; $i < $customer_num ; $i++) { 
    $customers = mysql_fetch_array($query_customer);
    $customers1 = $customers['username'];
    $email1= $customers['email'];
    $user_check = md5("$salt$customers1");
    $email_check = md5("$salt$email1");
    if($usr_new==$user_check OR $usr_new==$email_check){
      $user_new =$customers1;
      $username = $customers1;
      $uid = mysql_fetch_array(mysql_query("SELECT * FROM customers WHERE username = '$username'"));
      $uid = $uid[0];
      $user_stat = "active";
      break;
    }
    else if($usr_new!=$customers1){
      $username = $customers1;
    }
  }
}
else if (isset($_SESSION['negadrasuser'])) {
   $usr_new = $_SESSION['negadrasuser'];
  for ($i=0; $i < $customer_num ; $i++) { 
    $customers = mysql_fetch_array($query_customer);
    $customers1 = $customers['username'];
    $email1= $customers['email'];
    $user_check = md5("$salt$customers1");
    $email_check = md5("$salt$email1");
    if($usr_new==$user_check OR $usr_new==$email_check){
      $user_new =$customers1;
      $username = $customers1;
      $uid = mysql_fetch_array(mysql_query("SELECT * FROM customers WHERE username = '$username'"));
      $uid = $uid[0];
      $user_stat = "active";
      break;
    }
    else if($usr_new!=$customers1){
      $username = $customers1;
    }
  }
}
if(!isset($_SESSION)){
	session_start();
}

?>