<?php
    include "connection.php";

$firstname = $lastname = $email = $phone = $password = $confirmPassword = "";
$errors = [];
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $json = array();
    $json['emailExist'] = true;
    //FirstName Validation
   if(empty($_POST["firstname"])){
       $errors[] = 'FirstName required'; 
   } else{
       $firstname = validateInput($_POST['firstname']);
   }

     //LastName Validation
   if(empty($_POST["lastname"])){
         $errors[] = 'lastName required';
   } else{
       $lastname = validateInput($_POST["lastname"]);
   }
      //Email Validation
    if((!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) && empty($_POST["email"])){
          $errors[] = "Invalid email format";
       }
    else{
           $email = validateInput($_POST["email"]);
       }
       //Phone Number Validation 
   if(empty($_POST["phone"])){
       $errors[] = "PhoneNumber is required"; 
   } else{
       $phone = validateInput($_POST["phone"]);
   }
       //Password
   if((empty($_POST["password"])) && (empty($_POST["confirmPassword"]))){
       $errors[] = "Password is required"; 
   } else{
    $pass = validateInput($_POST["password"]);
    $confirm = validateInput( $_POST["ConfirmPassword"]);
       if(!($pass === $confirm)){
           $errors[] = "password doesn't match";
       }
       else{
          $password = validateInput($_POST["password"]);
       }
   } 
     $password = md5($password);
    if(empty($errors)){
        // echo $firstName;
        // echo $lastName;
        // echo $email;
        // echo $phone;
        // echo $password;
        $queryExist = "SELECT * FROM users WHERE email='$email' LIMIT 1";
        $qResult = mysqli_query($conn, $queryExist);
        if (mysqli_num_rows($qResult) == 0) {
            $json['emailExist'] = false;

            $sql = "INSERT INTO users (firstname, lastname, email, phone, password) VALUES ('$firstname', '$lastname', '$email', '$phone', '$password')";
        
            if(mysqli_query($conn,$sql)){
                $query = "SELECT * FROM users WHERE email='$email' LIMIT 1";
                $result = mysqli_query($conn, $query);
                $user_data = mysqli_fetch_assoc($result);
                $uid = $user_data["uid"];
                //
                if (!file_exists("../../resources/usersData/$uid/profile")) {
                    mkdir("../../resources/usersData/$uid");
                    mkdir("../../resources/usersData/$uid/profile");
                }
                if (isset($_FILES["profilePhoto"]["name"])) {
                    $json["profile"] = true;
                    $targetDir = "../../resources/usersData/$uid/profile/";
                    $fileName = basename($_FILES["profilePhoto"]["name"]);
                    $targetFilePath = $targetDir . $fileName;
                    $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
                    if(move_uploaded_file($_FILES["profilePhoto"]["tmp_name"], $targetFilePath)){
                        rename("../../resources/usersData/$uid/profile/$fileName","../../resources/usersData/$uid/profile/profile.png");
                        $json["upload"] = true;
                    }else{
                        $json["upload"] = false;
                    }
                }
                
                else {
                    copy("../../resources/usersData/default/profile.png", "../../resources/usersData/$uid/profile/profile.png");
                    $json["profile"] = false;
                }
                
                $json['success'] = true;
                echo json_encode($json);
            }
            else{
                $json['success'] = false;
                echo json_encode($json);
            }
        }

        else {
            echo json_encode($json);
        }

       
       mysqli_close($conn);
      
    }
 }   
?>