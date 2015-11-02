<?php
    require 'bakery_tasks.php';
    require 'AltoRouter.php';

    $router = new AltoRouter();
    $router->setBasePath('/assets/web');

    $router->map('GET','/ajax/orders', function() {
        getOrders();
    });

    $match = $router->match();

    if( $match && is_callable( $match['target'] ) ) {
            call_user_func_array( $match['target'], $match['params'] );
    } else { echo 'hi'; }
?>