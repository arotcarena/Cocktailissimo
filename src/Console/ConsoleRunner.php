<?php
namespace App\Console;

use RuntimeException;
use Symfony\Component\Process\Process;

class ConsoleRunner
{
    public static function run(string $command, string ...$suffix): string
    {
        $console = dirname(dirname(__DIR__)) . DIRECTORY_SEPARATOR . 'bin' . DIRECTORY_SEPARATOR . 'console';
        $command = ['php', $console, $command];

        foreach($suffix as $s)
        {
            $command[] = $s;
        }
        
        $process = new Process($command);
        $process->run();

        if (!$process->isSuccessful()) 
        {
            throw new RuntimeException('command "' . $command . '" fails');
        }
        return $process->getOutput();
    }
}