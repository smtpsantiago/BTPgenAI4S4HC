sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'josebecerra04a19/Customermessage/test/integration/FirstJourney',
		'josebecerra04a19/Customermessage/test/integration/pages/CustomerMessageList',
		'josebecerra04a19/Customermessage/test/integration/pages/CustomerMessageObjectPage'
    ],
    function(JourneyRunner, opaJourney, CustomerMessageList, CustomerMessageObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('josebecerra04a19/Customermessage') + '/index.html'
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