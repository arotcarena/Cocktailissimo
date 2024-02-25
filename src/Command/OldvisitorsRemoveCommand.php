<?php

namespace App\Command;

use App\AutoRemover\OldVisitorsRemover;
use App\Email\Admin\AdminNotificationListEmail;
use Symfony\Component\Console\Attribute\AsCommand;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\Console\Style\SymfonyStyle;

#[AsCommand(
    name: 'app:oldvisitors:remove',
    description: 'Supprime les visiteurs datant de plus de 13 mois',
)]
class OldvisitorsRemoveCommand extends Command
{
    public function __construct(
        private OldVisitorsRemover $oldVisitorsRemover,
        private AdminNotificationListEmail $adminNotificationListEmail
    )
    {
        parent::__construct();
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $io = new SymfonyStyle($input, $output);

        $this->oldVisitorsRemover->process();

        if($this->oldVisitorsRemover->count > 0)
        {
            $this->adminNotificationListEmail->send(
                $this->oldVisitorsRemover->message,
                $this->oldVisitorsRemover->recapLines
            );
        }

        $io->success($this->oldVisitorsRemover->message);

        return Command::SUCCESS;
    }
}
