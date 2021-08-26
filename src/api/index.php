<?php

header("Access-Control-Allow-Origin: *");

    if (strtoupper($_SERVER['REQUEST_METHOD']) != 'POST') {
        throw new Exception('Only POST requests are allowed');
    }

    // Make sure Content-Type is application/json 
    $content_type = isset($_SERVER['CONTENT_TYPE']) ? $_SERVER['CONTENT_TYPE'] : '';
    if (stripos($content_type, 'application/json') === false) {
    throw new Exception('Content-Type must be application/json');
    }
    
    $body = file_get_contents("php://input");
    $req = json_decode($body, true);
    if(isset($req)) {
        if(!is_array($req)) {
            throw new Exception("Error decoding JSON");
        }
    } else {
    }
    $options = $req['options'];

    switch ($options['object']) {
        case 'page':
            $page = $options['page']['part'];
            switch ($page) {
                case 'gallery': 
                    echo $page;
                break;
            };
            break;
        
        default:
            # code...
            break;
    };