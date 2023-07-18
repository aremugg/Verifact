import verificationManagement from "../../views/verifications/VerificationManagement";
import verificationManagementView from "../../views/verifications/VerificationManagementView";


export default [
    {
        path: '/verification-management',
        name: 'VerificationManagement',
        meta: {layout: 'agent',authRequired:true},
        component: verificationManagement,
    },{
        path: '/verification-management-View',
        name: 'VerificationManagementView',
        meta: {layout: 'agent',authRequired:true},
        component: verificationManagementView,
    },
];