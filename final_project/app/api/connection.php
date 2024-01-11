<?php
$conn = mysqli_connect("localhost","root","","negad");
   if(!$conn){
    die("connection failed:" . mysqli_connect_error());
     }
//    else{
//      echo "connected";
//      }
function validateInput($input) {
   $input = htmlspecialchars($input);
   $input = stripslashes($input);
   $input = trim($input);
   return $input;
}
?> 