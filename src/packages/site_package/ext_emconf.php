<?php

/**
 * Extension Manager/Repository config file for ext "site_package".
 */
$EM_CONF[$_EXTKEY] = [
    'title' => 'site package',
    'description' => '',
    'category' => 'templates',
    'constraints' => [
        'depends' => [
            'typo3' => '10.2.0-10.4.99'
        ],
        'conflicts' => [
        ],
    ],
    'autoload' => [
        'psr-4' => [
            'Studio\\SitePackage\\' => 'Classes',
        ],
    ],
    'state' => 'stable',
    'uploadfolder' => 0,
    'createDirs' => '',
    'clearCacheOnLoad' => 1,
    'author' => 'Daniel Hackiewicz',
    'author_email' => 'dani@studiothompfister.com',
    'author_company' => 'Studio Thom Pfister',
    'version' => '1.0.0',
];
