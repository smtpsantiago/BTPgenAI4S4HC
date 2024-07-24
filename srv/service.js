/**
 * Code is auto-generated by Application Logic, DO NOT EDIT.
 * @version(2.0)
 */
const LCAPApplicationService = require('@sap/low-code-event-handler');
const customermessage_Logic_Preprocessing = require('./code/customermessage-logic-preprocessing');

class josebecerra_04_a19Srv extends LCAPApplicationService {
    async init() {

        this.before('READ', 'CustomerMessage', async (request) => {
            await customermessage_Logic_Preprocessing(request);
        });

        return super.init();
    }
}


module.exports = {
    josebecerra_04_a19Srv
};