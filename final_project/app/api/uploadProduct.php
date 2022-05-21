<?php
// Include the database configuration file
// include 'dbConfig.php';
$statusMsg = '';

function validate ($data) {
    $data = stripslashes($data);
    $data = trim($data);
    $data = htmlspecialchars($data);
    return $data;
}

// File upload path
$targetDir = "uploads/";
$fileName = basename($_FILES["file"]["name"]);
$targetFilePath = $targetDir . $fileName;
$fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

// if(isset($_POST["submit"]) && !empty($_FILES["file"]["name"])){
    // $title = validate($_REQUEST['title']);
    // $price = validate($_REQUEST['Price']);
    // $description = validate($_REQUEST['Description']);
    // Allow certain file formats
    // $allowTypes = array('jpg','png','jpeg','gif','pdf');
    // if(in_array($fileType, $allowTypes)){
        // Upload file to server
        if(move_uploaded_file($_FILES["file"]["tmp_name"], $targetFilePath)){
            // Insert image file name into database
            $statusMsg = "The file ".$fileName. " has been uploaded successfully.";
            // $insert = $db->query("INSERT INTO products (name, description, price, rating, photo)
            // VALUES ('$title', '$description', '$price', '0', '$fileName');");
            // if($insert){
            //     $statusMsg = "The file ".$fileName. " has been uploaded successfully.";
            // }else{
            //     $statusMsg = "File upload failed, please try again.";
            // } 
        }else{
            $statusMsg = "Sorry, there was an error uploading your file.";
        }
    // }else{
//         $statusMsg = 'Sorry, only JPG, JPEG, PNG, GIF, & PDF files are allowed to upload.';
//     }
// }else{
//     $statusMsg = 'Please select a file to upload.';
// }

// Display status message
echo $statusMsg." ".$fileType;
?>