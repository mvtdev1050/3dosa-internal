/**
 * Copyright © Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

var config = {
    paths: {           
            'jqueryMain':'Magento_Theme/js/jquery-3.5.1',
            'slick':'Magento_Theme/js/slick-slider',
            'popperjs':'Magento_Theme/js/popper.min',			
            'customjs':'Magento_Theme/js/custom',
            'bootstrap':'Magento_Theme/js/bootstrap.min'
    },
    shim: {
        'jqueryMain': {
            'deps': ['jquery']
        },
        'bootstrap': {
            'deps': ['jquery','jquery/ui']
        },
		'popperjs': {
            'deps': ['jquery']
        },
		'customjs': {
            'deps': ['jquery']
        },
        'slick': {
            'deps': ['jquery']
        }
    }
};