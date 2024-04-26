<?php




$_server = "localhost";
$_user = "root";
$_pass = "";
$_db = "sistemaot";
echo "bien";

$conexion = new mysqli($_server,$_user,$_pass,$_db);


if($conexion->connect_errno){
    die("malo" . $conexion->connect_error());
}else{
    echo "bien";
}
?>