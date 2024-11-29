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
                    'name' => 'center',
                    'colPos' => 203,
                    'colspan' => 2
                ]
            ]
        ] // grid configuration
    )
    )
    // set an optional icon configuration
    // set an optional icon configuration
    ->setIcon('EXT:site_package/Resources/Public/Icons/container-1col.svg')
);

// override default settings
$GLOBALS['TCA']['tt_content']['types']['b13-1col-containe']['showitem'] = 'sys_language_uid,CType,header,tx_container_parent,colPos';


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
/*
#1 column less wide 8/10
\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'b13-1col-full-container', // CType
        '1 Column Container 8/12 Columns ', // label
        'For less wide content', // description
        [
            [
                [
                    'name' => 'center',
                    'colPos' => 204,
                    'colspan' => 2
                ]
            ]
        ] // grid configuration
    )
    )
        // set an optional icon configuration
        ->setIcon('EXT:site_package/Resources/Public/Icons/container-less-1col.svg')
);*/

#1 column less wide 10/10
/*\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'b13-1col-10-container', // CType
        '1 Column Container 10/12 Columns ', // label
        'For less wide content', // description
        [
            [
                [
                    'name' => 'center',
                    'colPos' => 204,
                    'colspan' => 2
                ]
            ]
        ] // grid configuration
    )
    )
        // set an optional icon configuration
        ->setIcon('EXT:site_package/Resources/Public/Icons/container-less-1col.svg')
);*/

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

#2 columns 10
/*\TYPO3\CMS\Core\Utility\GeneralUtility::makeInstance(\B13\Container\Tca\Registry::class)->configureContainer(
    (
    new \B13\Container\Tca\ContainerConfiguration(
        'b13-2cols10-container', // CType
        '2 Column Container 10/12', // label
        '10 columns of 12 available', // description
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
        ->setIcon('EXT:site_package/Resources/Public/Icons/container-2col.svg')
);*/

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
