<?php

    define('DB_NAME', 'pss_project_rozvrh');
    define('DB_USER', 'kuta');
    define('DB_PASSWORD', 'student');
    define('DB_HOST', '193.85.203.188');

    global $db;
    $db = new PDO(
         "mysql:host=" .DB_HOST. ";dbname=" .DB_NAME,DB_USER,DB_PASSWORD,
        array(
            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"
        )
     );
?>