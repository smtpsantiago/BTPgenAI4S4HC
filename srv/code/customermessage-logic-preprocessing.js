const lLMProxy = require('./utils/genAIHubProxyDirect');
const utils = require('./utils/utils');
const LOG = cds.log('GenAI');


/**
 * Categorization, urgency classification, service categorization, summarization, and translation
 * @After(event = { "READ" }, entity = "josebecerra_07_a19Srv.CustomerMessage")
 * @param {Array} messages - The result set of CustomerMessage entities
 * @param {Object} request - User information, tenant-specific CDS model, headers, and query parameters
 */
module.exports = async function(messages, request) {
    // Iterate over each message and apply transformations
    /**
     * 
        messages.forEach(message => {
            // Example categorization logic
            if (message.messageCategory.includes("complaint")) {
                message.messageUrgency = "high";
            } else if (message.messageCategory.includes("query")) {
                message.messageUrgency = "medium";
            } else {
                message.messageUrgency = "low";
            }

            // Example summarization logic (simplistic)
            if (message.fullMessageEnglish.length > 100) {
                message.summaryEnglish = message.fullMessageEnglish.substring(0, 97) + "...";
            }

            // Example translation logic (placeholder)
            message.titleCustomerLanguage = `Translated Title: ${message.titleEnglish}`;
            message.summaryCustomerLanguage = `Translated Summary: ${message.summaryEnglish}`;
            message.fullMessageCustomerLanguage = `Translated Message: ${message.fullMessageEnglish}`;
            message.suggestedResponseCustomerLanguage = `Translated Response: ${message.suggestedResponseEnglish}`;
        });
*/
try {
    // Select all customer messages from the database for update
    const customerMessages = await SELECT.from('josebecerra_07_a19.CustomerMessage').forUpdate();

    // Process customer message in the results in parallel for better perf
    await Promise.all(customerMessages.map(async customerMessage => {
        const {
            ID,
            titleEnglish,
            summaryEnglish,
            messageCategory,
            messageUrgency,
            messageSentiment,
            titleCustomerLanguage,
            summaryCustomerLanguage,
            fullMessageCustomerLanguage,
            fullMessageEnglish
        } = customerMessage;

        // Check if the message needs processing
        if (!titleEnglish || !messageCategory || !messageUrgency || !messageSentiment || !summaryCustomerLanguage || !summaryEnglish || !fullMessageEnglish) {
            const prompt = `
                    Categorize the fullMessageTextCustomerLanguage into one of (Technical, Delivery, Service). 
                    Classify urgency of the fullMessageTextCustomerLanguage into one of (High, Medium, Low). 
                    Classify sentiment of the fullMessageTextCustomerLanguage into one of (Negative, Positive, Neutral). 
                    Translate fullMessageTextCustomerLanguage to English and put it in fullMessageEnglish.
                    Summarize fullMessageTextCustomerLanguage into 20 words max and keep the original language and put it in summaryCustomerLanguage. 
                    Translate the summaryCustomerLanguage to English and put it in summaryEnglish.
                    Translate the titleCustomerLanguage to English and put it in titleEnglish.
                    Return the result in the provided JSON template below:
                    titleCustomerLanguage: ${titleCustomerLanguage}
                    fullMessageTextCustomerLanguage: ${fullMessageCustomerLanguage}
                    JSON template: {
                        fullMessageEnglish: Text,
                        titleEnglish: Text, 
                        summaryCustomerLanguage: Text, 
                        summaryEnglish: Text, 
                        messageCategory: Text, 
                        messageUrgency: Text, 
                        messageSentiment: Text
                    }
                `;

            // Complete the message with the generated data by GenAI Hub
            const resultRaw = await lLMProxy.completion(request, prompt, process.env.completionEndpoint);
            const resultJSON = JSON.parse(resultRaw);
            const {
                fullMessageEnglish,
                titleEnglish,
                summaryCustomerLanguage,
                summaryEnglish,
                messageCategory,
                messageUrgency,
                messageSentiment
            } = resultJSON;

            // Update the customer message in the database with the processed results
            await UPDATE('josebecerra_07_a19.CustomerMessage')
                .set({ fullMessageEnglish, titleEnglish, summaryCustomerLanguage, summaryEnglish, messageCategory, messageUrgency, messageSentiment })
                .where({ ID });

            LOG.info(`CustomerMessage with ID ${ID} updated`);
        } else {
            LOG.info(`CustomerMessage ${ID} already processed`);
        }
    }));
} catch (err) {
    LOG.error(JSON.stringify(err));

    const message = err.rootCause?.message || 'An error occurred';
    request.reject({
        code: '',
        message: message,
        target: '',
        status: 500,
    });
}


}