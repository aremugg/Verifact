import AgentManagement from "../../views/agent/AgentManagement";
import AgentManagementEdit from "../../views/agent/AgentManagementEdit";
import AgentManagementView from "../../views/agent/AgentManagementView";
import AgentManagementSuccessful from "../../views/agent/AgentManagementSuccessful";


export default [
    {
        path: '/agent-management',
        name: 'AgentManagement',
        meta: {layout: 'agent',authRequired:true},
        component: AgentManagement,
    },
    {
        path: '/agent-management-edit',
        name: 'AgentManagementEdit',
        meta: {layout: 'agent',authRequired:true},
        component: AgentManagementEdit,
    },
    {
        path: '/agent-management-view',
        name: 'AgentManagementView',
        meta: {layout: 'agent',authRequired:true},
        component: AgentManagementView,
    },
    {
        path: '/agent-management-successful',
        name: 'AgentManagementSuccessful',
        meta: {layout: 'agent',authRequired:true},
        component: AgentManagementSuccessful,
    },
];