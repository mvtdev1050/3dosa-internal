/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    deps: [
        "Magento_Theme/js/custom",
    ],
    paths: {
        slick: 'Magento_Theme/js/slick.min',
        bootstrap: 'Magento_Theme/js/bootstrap.min'
    },
    shim: {
        slick: {
            deps: ['jquery']
        },
        bootstrap: {
            deps: ['jquery']
        }
    }
};