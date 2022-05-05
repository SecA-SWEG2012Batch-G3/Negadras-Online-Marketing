<?php
		if(isset($_COOKIE['negadrasuser'])){
			session_start();
			session_destroy();
			setcookie("negadras",$usernm,time() - 60*60*24) or die("failed destroying cookie");
			setcookie("negadrasuser",$usernm,time() - 60*60*24) or die("failed destroying cookie");
		}
		else{
			 session_start();
             session_destroy();
		}
		header("location: login.php");
?>