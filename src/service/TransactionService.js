import apiClient from "./BaseService";

export default {
    callCreateTransactionApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient.appClient.post("/avcTransactionCreate",payload);
    },
    callReadTransactionApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient.appClient.post("/avcTransactionRead",payload);
    },
    callReadSingleTransactionApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient.appClient.post("/avcTransactionReadSingle",payload);
    },
    callUpdateTransactionApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient.appClient.post("/avcTransactionUpdate",payload);
    },
    callTransactionUpdateStatusApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient.appClient.post("/avcTransactionUpdateStatus",payload);
    },
};