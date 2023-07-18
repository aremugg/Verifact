import apiClient1 from "./BaseService";

export default {
  callGetUserInfoApi(payload) {
    // console.log("Service Payload ==>>", payload)
    payload.orgId = localStorage.orgID;
    if (localStorage._countryId != null)
      payload.countryId = localStorage._countryId;
    return apiClient1.authClient.post("auth/details",payload);
  },
  callGetDashboardApi(payload) {
    // console.log("Service Payload ==>>", payload)
    payload.orgId = localStorage.orgID;
    if (localStorage._countryId != null)
      payload.countryId = localStorage._countryId;
    return apiClient1.authClient.post("org/dashboard",payload);
  },
  callGetCountriesApi(payload) {
    // console.log("Service Payload ==>>", payload)
    payload.orgId = localStorage.orgID;
    if (localStorage._countryId != null)
      payload.countryId = localStorage._countryId;
    return apiClient1.appClient.post("fibridge/enquiry/get-countries",payload);
  },
};
