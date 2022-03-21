import apiClient1 from "./BaseService";


export default {

    callLogonApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient1.post("logon", payload);
    },
    callLogoutApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient1.post("logout", payload);
    },
    callInitiateEnrollmentApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient1.post("/initiateEnrollment", payload);
    },
    callCompleteEnrollmentApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient1.post("/completeEnrollment", payload);
    },
    callInitiateResetPasswordApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient1.post("/initiateResetPassword", payload);
    },

    callCompleteResetPasswordApi(payload) {
        // console.log("Service Payload ==>>", payload)
        payload.orgId = localStorage.orgID;
        if (localStorage._countryId != null)
            payload.countryId = localStorage._countryId;
        return apiClient1.post("/completeResetPassword", payload);
    },
};