import compliance from "../../views/compliance/Compliance";
import complianceBankDetails from "../../views/compliance/ComplianceBankDetails";
import complianceBankDetailsComplete from "../../views/compliance/ComplianceBankDetailsComplete";
import complianceComplete from "../../views/compliance/ComplianceComplete";
import complianceDocumentUpload from "../../views/compliance/ComplianceDocumentUpload";
import complianceDocumentUploadComplete from "../../views/compliance/ComplianceDocumentUploadComplete";
import complianceFormFilled from "../../views/compliance/ComplianceFormFilled";


export default [
    {
        path: '/compliance',
        name: 'Compliance',
        meta: {layout: 'agent',authRequired:true},
        component: compliance,
    },
    {
        path: '/compliance-bank-details',
        name: 'ComplianceBankDetails',
        meta: {layout: 'agent',authRequired:true},
        component: complianceBankDetails,
    },
    {
        path: '/compliance-bank-details-complete',
        name: 'ComplianceBankDetailsComplete',
        meta: {layout: 'agent',authRequired:true},
        component: complianceBankDetailsComplete,
    },
    {
        path: '/compliance-complete',
        name: 'ComplianceComplete',
        meta: {layout: 'agent',authRequired:true},
        component: complianceComplete,
    },
    {
        path: '/compliance-document-upload',
        name: 'ComplianceDocumentUpload',
        meta: {layout: 'agent',authRequired:true},
        component: complianceDocumentUpload,
    },
    {
        path: '/compliance-document-upload-complete',
        name: 'ComplianceDocumentUploadComplete',
        meta: {layout: 'agent',authRequired:true},
        component: complianceDocumentUploadComplete,
    },
    {
        path: '/compliance-form-filled',
        name: 'ComplianceFormFilled',
        meta: {layout: 'agent',authRequired:true},
        component: complianceFormFilled,
    },
];