<?php
use App\Console\ConsoleRunner;


require dirname(dirname(__DIR__)) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';


$message = ConsoleRunner::run('presta:sitemaps:dump', dirname(__DIR__)); // arg : destination_directory
echo $message;