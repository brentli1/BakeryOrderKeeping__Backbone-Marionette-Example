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

    function editOrders($data) {
        $dbcon = DBconnect();
        $stmt = $dbcon->prepare("UPDATE tbl_orders SET orderFName=?, orderLName=?, orderEmail=?, orderType=?, orderPlaceDateTime=?, orderDueDate=?, paid=?, baked=?, readyForPickup=?, pickedUp=? WHERE id=?");
        $stmt->bind_param("ssssssssssi", $data['orderFName'], $data['orderLName'], $data['orderEmail'], $data['orderType'], $data['orderPlaceDateTime'],  $data['orderDueDate'],  $data['paid'],  $data['baked'],  $data['readyForPickup'],  $data['pickedUp'], $data['id']);

        $stmt->execute();
        DBdisconnect($dbcon);
        echo json_encode($data);
    }

    function createOrder($data) {
        $dbcon = DBconnect();
        $stmt = $dbcon->prepare("INSERT into tbl_orders (orderFName, orderLName, orderEmail, orderType, orderPlaceDateTime, orderDueDate, paid, baked, readyForPickup, pickedUp) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
        $stmt->bind_param("ssssssssss", $data['orderFName'], $data['orderLName'], $data['orderEmail'], $data['orderType'], $data['orderPlaceDateTime'],  $data['orderDueDate'],  $data['paid'],  $data['baked'],  $data['readyForPickup'],  $data['pickedUp']);

        $stmt->execute();
        DBdisconnect($dbcon);
        echo json_encode($data);
    }

?>