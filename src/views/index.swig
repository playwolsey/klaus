<!DOCTYPE html>
<html lang="zh">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="user-scalable=no, width=device-width, initial-scale=1.0, maximum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="keywords" content="">
    <meta name="description" content="">
    <!--<link rel="manifest" href="manifest.json">-->
    <title>klaus</title>
    <link rel="stylesheet" href="assets/main.css" type="text/css">
</head>

<body>
<div id="app"></div>

{% if process.env.NODE_ENV !== "development" %}
<script src="assets/vendor.bundle.js"></script>
{% else %}
<script src="assets/vendor.dll.js"></script>
{% endif %}
<script src="assets/main.js"></script>
</body>
</html>
