<?php


// $result = DateTimeZone::listIdentifiers(DateTimeZone::PER_COUNTRY, 'CN');
// $dateTimeZone = $result[0];
// var_dump($dateTimeZone);




$date = new DateTimeImmutable();

var_dump($date->format('d/m/Y H:i:s'));

$newDate = $date->setTimezone(new DateTimeZone('Europe/Paris'));

var_dump($newDate->format('d/m/Y H:i:s'));


