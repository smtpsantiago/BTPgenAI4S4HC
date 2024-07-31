using josebecerra_07_a19Srv as service from '../../srv/service';
annotate service.ProductFAQ with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'ID',
                Value : ID,
            },
            {
                $Type : 'UI.DataField',
                Label : 'issue',
                Value : issue,
            },
            {
                $Type : 'UI.DataField',
                Label : 'question',
                Value : question,
            },
            {
                $Type : 'UI.DataField',
                Label : 'answer',
                Value : answer,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'ID',
            Value : ID,
        },
        {
            $Type : 'UI.DataField',
            Label : 'issue',
            Value : issue,
        },
        {
            $Type : 'UI.DataField',
            Label : 'question',
            Value : question,
        },
        {
            $Type : 'UI.DataField',
            Label : 'answer',
            Value : answer,
        },
    ],
);

annotate service.ProductFAQ with @(
    UI.Identification : [
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'josebecerra_07_a19Srv.Action1',
            Label : 'Action1',
        },
    ]
);
