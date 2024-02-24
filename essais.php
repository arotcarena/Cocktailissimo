<?php


$result = DateTimeZone::listIdentifiers(DateTimeZone::PER_COUNTRY, 'IT');
$dateTimeZone = $result[0];
var_dump($dateTimeZone);