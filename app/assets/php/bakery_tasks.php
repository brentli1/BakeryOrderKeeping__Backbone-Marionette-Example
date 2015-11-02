<?php
    require 'DBconnect.php';

    function getOrders() {
        $arr1=array('id'=>1,'result2'=>'efg');
        $arr2=array('id'=>2,'result2'=>'lmn');
        $arr3=array($arr1,$arr2);

        echo json_encode($arr3);
    }

?>