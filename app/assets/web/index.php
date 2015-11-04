<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bakery Order Tracker</title>
    <link rel="stylesheet" type="text/css" href="../build/css/styles.css">
    <script type="text/javascript" src="../build/js/vendor.js"></script>
    <script type="text/javascript" src="../js/app-js/bakery_app.js"></script>
    <script type="text/javascript" src="../build/templates/templates.js"></script>
    <script type="text/javascript" src="../build/js/app.js"></script>
</head>
<body>
    <div class="w-100 t-center">
        <img src="../imgs/logo.png" class="logo">
    </div>
    <div id="main-region"></div>
    <script type="text/javascript">
        $(document).ready(function() {
            BakeryApp.start();
        });
    </script>
</body>
</html>