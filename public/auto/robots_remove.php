<?php
use App\Console\ConsoleRunner;

require dirname(dirname(__DIR__)) . DIRECTORY_SEPARATOR . 'vendor' . DIRECTORY_SEPARATOR . 'autoload.php';

$message = ConsoleRunner::run('app:robots:remove');
echo $message;