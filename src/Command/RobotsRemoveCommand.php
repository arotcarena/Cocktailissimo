<?php

namespace App\Command;

use App\AutoRemover\RobotsVisitorsRemover;
use App\Email\Admin\AdminNotificationListEmail;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:robots:remove',
    description: 'Supprime les visiteurs robots',
)]
class RobotsRemoveCommand extends Command
{
    public function __construct(
        private RobotsVisitorsRemover $robotsVisitorsRemover,
        private AdminNotificationListEmail $adminNotificationListEmail
    )
    {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $this->robotsVisitorsRemover->process();

        if($this->robotsVisitorsRemover->count > 0)
        {
            $this->adminNotificationListEmail->send(
                $this->robotsVisitorsRemover->message,
                $this->robotsVisitorsRemover->recapLines
            );
        }

        $io->success($this->robotsVisitorsRemover->message);

        return Command::SUCCESS;
    }
}
