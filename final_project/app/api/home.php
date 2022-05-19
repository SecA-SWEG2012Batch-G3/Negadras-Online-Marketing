<?php
session_start();

    include("connection.php");
    include("functions.php");

    $user_data = check_login($conn);

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <a href="logout.php">Logout</a>
    <h1>This is Home page</h1>
    <h2>Hello <?php echo $user_data['firstname']?></h2>
    <a href="../App/View/signup.html">signup</a>
</body>
</html>