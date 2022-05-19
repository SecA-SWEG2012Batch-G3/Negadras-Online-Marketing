<?php
  session_start();

  include("functions.php");
  $conn = mysqli_connect("localhost","root","","negad");
  

  if($_SERVER["REQUEST_METHOD"]=="POST"){
     
     $email = $_POST["email"];
     $password = md5($_POST["password"]);
    //  echo $email. "  ". $password;
     

    if(!empty($email) && !empty($password)){
     
       $query = "SELECT * FROM users WHERE email='$email' LIMIT 1";
       $result = mysqli_query($conn, $query);
    //    echo  json_encode(mysqli_fetch_assoc($result));
       
       if($result){
            if($result && mysqli_num_rows($result) > 0)
            {
                $user_data = mysqli_fetch_assoc($result);
                $json = array();
                
                if($user_data['password'] === $password)
                   {
                    foreach ($user_data as $key=>$value) {
                        if ($key == "password") {
                            continue;
                        }
                        $json[$key] = $value;
                    }
                    $json['exist'] = "true";
                    echo json_encode($json);

                    // echo "success";
                   }
                else {
                    $json ['exist']= "false";
                    echo json_encode($json);
                }
            }
       }
        //  echo "wrong user name";
    } else 
       {
        //   echo "Please Enter some valid information";
          
       }
  }

?>
