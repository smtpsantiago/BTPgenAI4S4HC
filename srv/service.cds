using { S4HCP_ServiceOrder_Odata } from './external/S4HCP_ServiceOrder_Odata.cds';

using { josebecerra_04_a19 as my } from '../db/schema.cds';

@path : '/service/josebecerra_04_a19'
service josebecerra_04_a19Srv
{
    @odata.draft.enabled
    entity CustomerMessage as
        projection on my.CustomerMessage
        actions
        {
            action Action1
            (
            );
        };

    entity A_ServiceOrder as
        projection on S4HCP_ServiceOrder_Odata.A_ServiceOrder
        {
            ServiceOrder,
            ServiceOrderDescription
        };

    @odata.draft.enabled
    entity ProductFAQ as
        projection on my.ProductFAQ
        {
            ID,
            issue,
            question,
            answer
        };
}

annotate josebecerra_04_a19Srv with @requires :
[
    'authenticated-user'
];
