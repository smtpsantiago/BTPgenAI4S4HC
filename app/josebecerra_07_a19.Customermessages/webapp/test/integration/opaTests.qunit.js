sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'josebecerra07a19/Customermessages/test/integration/FirstJourney',
		'josebecerra07a19/Customermessages/test/integration/pages/CustomerMessageList',
		'josebecerra07a19/Customermessages/test/integration/pages/CustomerMessageObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessageList, CustomerMessageObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('josebecerra07a19/Customermessages') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheCustomerMessageList: CustomerMessageList,
					onTheCustomerMessageObjectPage: CustomerMessageObjectPage
                }
            },
            opaJourney.run
        );
    }
);