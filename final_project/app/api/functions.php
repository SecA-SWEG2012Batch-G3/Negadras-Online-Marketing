<?php
 

  include('connection.php');
   function check_login($conn){
       if(isset($_SESSION['uid']))
       {

           $id = $_SESSION['uid'];
           $query = "SELECT * FROM users WHERE uid = '$id' limit 1";

           $result = mysqli_query($conn, $query);
           if($result && mysqli_num_rows($result) > 0){

               $user_data = mysqli_fetch_assoc($result);
               return $user_data;
           }
       }
       //redirect to login 
       header("Location: login.php");
       die;
   }

   setcookie('username', 'abel', time()+(3600), "/");
   $username = $_COOKIE['username'];
?>
  