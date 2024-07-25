using { S4HCP_ServiceOrder_Odata } from './external/S4HCP_ServiceOrder_Odata.cds';

using { josebecerra_04_a19 as my } from '../db/schema.cds';

@path : '/service/josebecerra_04_a19'
service josebecerra_04_a19Srv
{
    @odata.draft.enabled
    entity CustomerMessage as
        projection on my.CustomerMessage;

    entity A_ServiceOrder as
        projection on S4HCP_ServiceOrder_Odata.A_ServiceOrder
        {
            ServiceOrder,
            ServiceOrderDescription
        };
}

annotate josebecerra_04_a19Srv with @requires :
[
    'authenticated-user'
];
