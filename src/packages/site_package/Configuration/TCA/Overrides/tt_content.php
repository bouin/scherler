<?php

#1 column
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'b13-1col-container', // CType
        '1 Column', // label
        'Dedicated for Header', // description
        [
            [
                [
                    'name' => '1col – colPos (name)',
                    'colPos' => 100,
                    'colspan' => 2
                ]
            ]
        ] // grid configuration
    )
    )
    // set an optional icon configuration
    ->setIcon('EXT:site_package/Resources/Public/Icons/container-1col.svg')
);

#1 column 10/12
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'b13-1col-10-container', // CType
        '1 Column 10/12', // label
        'Col 10/12', // description
        [
            [
                [
                    'name' => '1col 10/12',
                    'colPos' => 100,
                    'colspan' => 2
                ]
            ]
        ] // grid configuration
    )
    )
    // set an optional icon configuration
    ->setIcon('EXT:site_package/Resources/Public/Icons/container-1col.svg')
);

// override default settings
//$GLOBALS['TCA']['tt_content']['types']['b13-1col-containe']['showitem'] = 'sys_language_uid,CType,header,tx_container_parent,colPos';


#1 column full width for image and button
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'b13-1col-container-full', // CType
        '1 column full width', // label
        'Dedicated for image and button on header', // description
        [
            [
                [
                    'name' => 'center',
                    'colPos' => 203,
                    'colspan' => 2
                ]
            ]
        ] // grid configuration
    )
    )
        // set an optional icon configuration
        ->setIcon('EXT:site_package/Resources/Public/Icons/1ColFull.svg')
);

#2 columns
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'b13-2cols-container', // CType
        '2 Columns', // label
        'Some Description of the Container', // description
        [
            [
                [
                    'name' => 'left side',
                    'colPos' => 201
                ],
                [   'name' => 'right side',
                    'colPos' => 202
                ]
            ]
        ] // grid configuration
    )
    )
        // set an optional icon configuration
        ->setIcon('EXT:site_package/Resources/Public/Icons/2Cols.svg')
);

#3 columns
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'b13-3cols-images-container', // CType
        '3 Columns', // label
        '3 responsive columns', // description
        [
            [
                [
                    'name' => 'left',
                    'colPos' => 201
                ],
                [   'name' => 'center',
                    'colPos' => 202
                ],
                [
                    'name' => 'right',
                    'colPos' => 203
                ]

            ]
        ] // grid configuration
    )
    )
        // set an optional icon configuration
        ->setIcon('EXT:site_package/Resources/Public/Icons/3Cols.svg')
);

\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'b13-2cols-with-header-container', // CType
        '2 Column Container With Header', // label
        'Some Description of the Container', // description
        [
            [
                ['name' => 'header', 'colPos' => 200, 'colspan' => 2, 'allowed' => ['CType' => 'header, textmedia']]
            ],
            [
                ['name' => 'left side', 'colPos' => 201],
                ['name' => 'right side', 'colPos' => 202]
            ]
        ] // grid configuration
    )
    )
        // set an optional icon configuration
        ->setIcon('EXT:site_package/Resources/Public/Icons/2Cols.svg')
);
