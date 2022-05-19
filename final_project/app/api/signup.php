<?php
session_start();

    include("functions.php");
    $conn = mysqli_connect("localhost","root","","negad");
    if(!$conn){
     die("connection failed:" . mysqli_connect_error());
      }
 //    else{
 //      echo "connected";
 //      }

$firstname = $lastname = $email = $phone = $password = $confirmPassword = "";
$errors = [];
if($_SERVER["REQUEST_METHOD"]=="POST"){
    //FirstName Validation
   if(empty($_POST["firstname"])){
       $errors[] = 'FirstName required'; 
   } else{
       $firstname = $_POST['firstname'];
   }

     //LastName Validation
   if(empty($_POST["lastname"])){
         $errors[] = 'lastName required';
   } else{
       $lastname = $_POST["lastname"];
   }
      //Email Validation
    if((!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) && empty($_POST["email"])){
          $errors[] = "Invalid email format";
       }
    else{
           $email = $_POST["email"];
       }
       //Phone Number Validation 
   if(empty($_POST["phone"])){
       $errors[] = "PhoneNumber is required"; 
   } else{
       $phone = $_POST["phone"];
   }
       //Password
   if((empty($_POST["password"])) && (empty($_POST["confirmPassword"]))){
       $errors[] = "Password is required"; 
   } else{
    $pass = $_POST["password"];
    $confirm = $_POST["ConfirmPassword"];
       if(!($pass === $confirm)){
           $errors[] = "password doesn't match";
       }
       else{
          $password = $_POST["password"];
       }
   } 
     $password = md5($password);
    if(empty($errors)){
        // echo $firstName;
        // echo $lastName;
        // echo $email;
        // echo $phone;
        // echo $password;
        $sql = "INSERT INTO users (firstname, lastname, email, phone, password) VALUES ('$firstname', '$lastname', '$email', '$phone', '$password')";
        $json = array();
       if(mysqli_query($conn,$sql)){
        $json['success'] = "true";
           echo json_encode($json);
         }
       else{
          $json['success'] = "false";
          echo json_encode($json);
          }
       mysqli_close($conn);
      
    }
 }   
?>

