sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'josebecerra07a19/ProductFAQApp/test/integration/FirstJourney',
		'josebecerra07a19/ProductFAQApp/test/integration/pages/ProductFAQList',
		'josebecerra07a19/ProductFAQApp/test/integration/pages/ProductFAQObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductFAQList, ProductFAQObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('josebecerra07a19/ProductFAQApp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheProductFAQList: ProductFAQList,
					onTheProductFAQObjectPage: ProductFAQObjectPage
                }
            },
            opaJourney.run
        );
    }
);