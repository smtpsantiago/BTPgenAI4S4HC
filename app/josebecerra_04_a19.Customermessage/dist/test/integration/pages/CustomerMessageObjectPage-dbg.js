sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'josebecerra04a19.Customermessage',
            componentId: 'CustomerMessageObjectPage',
            contextPath: '/CustomerMessage'
        },
        CustomPageDefinitions
    );
});