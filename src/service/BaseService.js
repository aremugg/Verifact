import axios from "axios";
import 'vue-toast-notification/dist/theme-sugar.css';
import {baseUrl} from "../../config/config.config.json";

import store from "../store/store";
import router from "../router";
import swal from "sweetalert";

const apiClient = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
      //  Accept: "application/json",
        "Content-Type": "application/json"
    }
});
const apiClient1 = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    headers: {
        //  Accept: "application/json",
        "Content-Type": "application/json"
    }
});

apiClient.interceptors.request.use(config => {
    const token = store.getters.getToken;
    const tok = store.getters["auth/getTok"];
    config.headers.Authorization = (token == null)? tok: token;
    config.headers.ipaddress = localStorage._ipAddress;
    return config
});

apiClient.interceptors.response.use(config => {
    if (config != null)
        if (config.data != null)
            if (config.data.responseCode === '92' || config.data.responseCode === '990'){
                swal('Session Expired!',config.data.responseMessage != null?config.data.responseMessage:config.data.responseMessage,'info').then(res=>{
                    localStorage.clear();
                    console.log(res)
                    router.push('/').then()
                })
            }
    if (config.data.responseCode === '999'){
        // Vue.$toast.open({
        //     message: config.data.responseMessage,
        //     type: 'error',
        //     position: 'top-right'
        //     // all of other options may go here
        // });
    }
    return config
});



export default apiClient1
