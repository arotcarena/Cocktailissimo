<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20231202211856 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE user ADD CONSTRAINT FK_8D93D649A133F1B8 FOREIGN KEY (sender_address_id) REFERENCES light_address (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_8D93D649A133F1B8 ON user (sender_address_id)');
        $this->addSql('ALTER TABLE vendor_group ADD shipping_info_id INT DEFAULT NULL');
        $this->addSql('ALTER TABLE vendor_group ADD CONSTRAINT FK_7B864685BBC3C73C FOREIGN KEY (shipping_info_id) REFERENCES shipping_info (id)');
        $this->addSql('CREATE UNIQUE INDEX UNIQ_7B864685BBC3C73C ON vendor_group (shipping_info_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
    }
}
