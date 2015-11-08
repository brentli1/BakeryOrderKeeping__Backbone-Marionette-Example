<?php
    require 'bakery_tasks.php';
    require 'AltoRouter.php';

    $router = new AltoRouter();
    $router->setBasePath('/assets/web');

    $router->map('GET','/ajax/orders', function() {
        getOrders();
    });

    $router->map('PUT','/ajax/orders/edit/[i:id]', function() {
        $request_body = file_get_contents('php://input');
        $data = json_decode($request_body, true);
        editOrders($data);
    });

    $router->map('POST','/ajax/orders/create', function() {
        $request_body = file_get_contents('php://input');
        $data = json_decode($request_body, true);
        createOrder($data);
    });

    $match = $router->match();

    if( $match && is_callable( $match['target'] ) ) {
            call_user_func_array( $match['target'], $match['params'] );
    } else { echo 'hi'; }
?>