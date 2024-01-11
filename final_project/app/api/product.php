<?php
include "connection.php";
// if(isset($_GET['products'])){
	$sql = "SELECT * FROM  products";
	$query = mysqli_query($conn, $sql);
	$numPro = mysqli_num_rows($query);
	$prods = [];
	for($i=0; $i<$numPro; $i++){
		$plist = mysqli_fetch_assoc($query);
		array_push($prods, $plist);
	}
	header("Content-Type: application/json; charset=utf-8");
	echo json_encode($prods);
// }
?>