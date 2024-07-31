sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'josebecerra07a19.ProductFAQApp',
            componentId: 'ProductFAQList',
            contextPath: '/ProductFAQ'
        },
        CustomPageDefinitions
    );
});