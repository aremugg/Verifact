import apiClient from "./BaseService";
import apiClient1 from "./BaseService";

export default {
    callCreateAccountApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient1.appClient.post("/avcAccountCreate",payload);
    },
    callReadAccountApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient1.appClient.post("/avcAccountRead",payload);
    },
    callAccountReadSingleApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient1.appClient.post("/avcAccountReadSingle",payload);
    },
    callUpdateAccountApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient1.appClient.post("/avcAccountUpdate",payload);
    },
    callAccountUpdateStatusApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient.appClient.post("/avcAccountUpdateStatus",payload);
    },
};