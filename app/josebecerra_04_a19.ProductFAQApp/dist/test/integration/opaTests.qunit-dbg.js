sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'josebecerra04a19/ProductFAQApp/test/integration/FirstJourney',
		'josebecerra04a19/ProductFAQApp/test/integration/pages/ProductFAQList',
		'josebecerra04a19/ProductFAQApp/test/integration/pages/ProductFAQObjectPage'
    ],
    function(JourneyRunner, opaJourney, ProductFAQList, ProductFAQObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('josebecerra04a19/ProductFAQApp') + '/index.html'
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