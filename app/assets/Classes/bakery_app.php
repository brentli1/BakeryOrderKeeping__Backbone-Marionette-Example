<?php
    include 'Functions.php';
    include 'AltoRouter.php';
    $router = new AltoRouter();
    $router->setBasePath('/assets/web');
    $router->map('GET','/home', function() {
        doStuff();
    });
    $match = $router->match();
    if( $match && is_callable( $match['target'] ) ) {
            call_user_func_array( $match['target'], $match['params'] );
    } else { return; }
?>