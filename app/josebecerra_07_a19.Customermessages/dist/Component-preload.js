//@ui5-bundle josebecerra07a19/Customermessages/Component-preload.js
sap.ui.require.preload({
	"josebecerra07a19/Customermessages/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("josebecerra07a19.Customermessages.Component",{metadata:{manifest:"json"}})});
},
	"josebecerra07a19/Customermessages/i18n/i18n.properties":'# This is the resource bundle for josebecerra07a19.Customermessages\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Customer messages\n\n#YDES: Application description\nappDescription=My SAP Manage Customer messages\n\n#XFLD,51\nflpTitle=Customer messages\n',
	"josebecerra07a19/Customermessages/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"josebecerra07a19.Customermessages","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.14.2","toolsId":"2340e55b-bcb3-4ddd-bca6-a223ffcde8f1"},"dataSources":{"mainService":{"uri":"service/josebecerra_07_a19/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"josebecerra07a19Customermessag-display":{"semanticObject":"josebecerra07a19Customermessag","action":"display","title":"{{flpTitle}}","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.120.13","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"josebecerra07a19.Customermessages.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"CustomerMessageList","target":"CustomerMessageList"},{"pattern":"CustomerMessage({key}):?query:","name":"CustomerMessageObjectPage","target":"CustomerMessageObjectPage"}],"targets":{"CustomerMessageList":{"type":"Component","id":"CustomerMessageList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/CustomerMessage","variantManagement":"Page","navigation":{"CustomerMessage":{"detail":{"route":"CustomerMessageObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"CustomerMessageObjectPage":{"type":"Component","id":"CustomerMessageObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/CustomerMessage"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"lcap.josebecerra_07_a19"}}'
});
//# sourceMappingURL=Component-preload.js.map
