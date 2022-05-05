<?php
$query_customer = mysql_query("SELECT * FROM customers");
$customer_num = mysql_num_rows($query_customer);
$user_stat = "";
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
      $user_stat = "active";
      break;
    }
    else if($usr_new!=$customers1){
      $username = $customers1;
    }
  }
}
if(isset($_POST["signinbtn"])) {
          $username = strtolower($_POST["username"]);
          $password = $_POST["password"];
          if(isset($_POST["remember"])){
              $check_box = $_POST["remember"];
            }
          else{
            $check_box = "";
          }
          $hashed = md5("$salt$password");
          if(mysql_num_rows(mysql_query("select * from customers where (username='$username' || email='$username') && password='$hashed'"))) {

            if($check_box == "remember"){
              $_SESSION['username'] = md5("$salt$username");
              setcookie("negadras",$_SESSION['username'],time() + 60*60*24) or die("failed creating cookie");
              setcookie("negadrasuser",$_SESSION['username'],time() + 60*60*96) or die("failed creating cookie");
              echo '<meta http-equiv="refresh" content="0;url=index.php">';
            }
            else{
              $usr = md5("$salt$username");
              $_SESSION['negadras'] = $usr;
              $_SESSION['negadrasuser'] = $usr;
              echo '<meta http-equiv="refresh" content="0;url=index.php">';
            }
          }
          else{
            echo '<style>#error_ar{display: block;}#email{border: 1px solid darkred; }#exampleInputPassword{border: 1px solid darkred;} </style>
            ';

          }
      }

if(isset($_COOKIE['negadras']) AND $user_stat =="active") {
    header("location: index.php");
}
?>