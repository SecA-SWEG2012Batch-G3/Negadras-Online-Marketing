<?php

  include "connection.php";

  if($_SERVER["REQUEST_METHOD"]=="POST"){

    $json = array();
     
     $email = validateInput($_POST["email"]);
     $password = md5(validateInput($_POST["password"]));
    //  echo $email. "  ". $password;
     

    if(!empty($email) && !empty($password)){
     
       $query = "SELECT * FROM users WHERE email='$email' LIMIT 1";
       $result = mysqli_query($conn, $query);
        //    echo  json_encode(mysqli_fetch_assoc($result));
       
       if($result){
            if($result && mysqli_num_rows($result) > 0)
            {
                $user_data = mysqli_fetch_assoc($result);
                
                if($user_data['password'] === $password)
                   {
                    foreach ($user_data as $key=>$value) {
                        if ($key == "password") {
                            continue;
                        }
                        $json[$key] = $value;
                    }
                    $json['exist'] = true;
                    $json['message'] = "Susscessfully logged in";
                    echo json_encode($json);

                    // echo "success";
                   }
                else {
                    $json ['exist']= false;
                    $json['message'] = "Wrong password";
                    echo json_encode($json);
                }
            }
       }
       else {
        $json ['exist']= false;
        $json['message'] = "Wrong username";
        echo json_encode($json);
       }
    } else 
       {
        $json ['exist']= false;
       $json['message'] = "please enter username and password";
       echo json_encode($json);
          
       }
  }

?>
