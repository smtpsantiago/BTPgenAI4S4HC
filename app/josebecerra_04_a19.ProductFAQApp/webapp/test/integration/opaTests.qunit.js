sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'josebecerra04a19/ProductFAQApp/test/integration/FirstJourney',
		'josebecerra04a19/ProductFAQApp/test/integration/pages/List',
		'josebecerra04a19/ProductFAQApp/test/integration/pages/ObjectPage'
    ],
    function(JourneyRunner, opaJourney, List, ObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('josebecerra04a19/ProductFAQApp') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheList: List,
					onTheObjectPage: ObjectPage
                }
            },
            opaJourney.run
        );
    }
);