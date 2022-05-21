<?php
include "connection.php";

$title = $description = "";
$price= $uid = 0;
$errors = [];
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $json["productPhoto"] = false;
    $json["upload"] = false;
    $json["complete"] = false;
    $uid = intval($_POST["userId"]);
    $json = array();
    //Title Validation
   if(empty($_POST["title"])){
       $errors[] = 'Title required'; 
   } else{
       $title = validateInput($_POST["title"]);
   }

     //Description Validation
   if(empty($_POST["Description"])){
         $errors[] = 'Description required';
   } else{
       $description = validateInput($_POST["Description"]);
   }
       //Price Validation 
   if(empty($_POST["Price"])){
       $errors[] = "Price is required"; 
   } else{
       $price = validateInput($_POST["Price"]);
       $price = intval($price);
   }
    if(empty($errors)){
        $time = time();
            //
        if (isset($_FILES["productPhoto"]["name"])) {
            $json["productPhoto"] = true;
            $targetDir = "../../resources/productData/$time";
            $fileName = basename($_FILES["productPhoto"]["name"]);
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);
            if(move_uploaded_file($_FILES["productPhoto"]["tmp_name"], $targetFilePath)){
                $json["upload"] = true;
                $sql = "INSERT INTO products (name, description, price, uid, photo) VALUES ('$title', '$description', '$price', '$uid', '$targetFilePath')";
                if(mysqli_query($conn,$sql)){
                    $json["complete"] =  true;
                }
            }
        }
       
       mysqli_close($conn);

       echo json_encode($json);
      
    }
 }   
?>