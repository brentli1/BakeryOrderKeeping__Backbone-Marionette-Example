<?php
    require('bakery_tasks.php');
    include('AltoRouter.php');
    $router = new AltoRouter();
    $router->setBasePath('/assets/web');
    $router->map('GET','/ajax/orders', function() {
        $arr1=array('id'=>1,'result2'=>'efg');
        $arr2=array('id'=>2,'result2'=>'lmn');
        $arr3=array($arr1,$arr2);
        echo json_encode($arr3);
    });
    $match = $router->match();
    if( $match && is_callable( $match['target'] ) ) {
            call_user_func_array( $match['target'], $match['params'] );
    } else { echo 'hi'; }
?>