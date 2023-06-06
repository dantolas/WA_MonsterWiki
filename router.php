<?php
session_start();
$request = $_SERVER['REQUEST_URI'];

switch ($request) {

    case '':
    case '/':
        $redirect = '/views/main.html';
        break;

    case '/main':
        $redirect = '/views/main.html';
        break;

    case '/monsters':
        $redirect = '/views/monsters.html';
        break;

    case '/about':
        $redirect = '/views/about.html';
        break;

    default:
        http_response_code(404);
        require __DIR__ . '/views/404.html';
        exit();
}

$_SESSION['site'] = $redirect;
require_once __DIR__ . '/views/header.html';
require_once __DIR__ . $redirect ?? __DIR__ . '/views/main.html';
require_once __DIR__ . '/views/header.html';
?>