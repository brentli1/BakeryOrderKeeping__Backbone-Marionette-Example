<?php
    require 'DBconnect.php';

    function getOrders() {
        $dbcon = DBconnect();

        $sqlStatement = "SELECT * FROM tbl_orders";
        $orders = mysqli_query($dbcon, $sqlStatement);

        if(!$orders) {
            die('Error: ' . mysql_error());
        }

        $rows = array();
            while($r = mysqli_fetch_assoc($orders)) {
            $rows[] = $r;
        }

        DBdisconnect($dbcon);

        echo json_encode($rows);
    }

?>