import AuthService from "../../service/AuthService";
import AuthRequest from "@/model/request/AuthRequest";
// import AuthResponse from "@/model/response/AuthResponse";
import swal from 'sweetalert'
import router from "@/router";
//import AuthResponse from "../model/response/AuthResponse";

//export const namespaced = true

export const state = {
    token:null,
    isDocumentsUpt: false,
    authLoading: false,
    deviceId: '',
    screen: 'recovery1',
    loginScreen: 'login',
    regScreen: 'reg',
    userInfo: {
        responseCode: "",
        responseMessage: ""
    },
    response:{}


}


export const getters = {
    getTok: state => {
        // console.log("getter getTok")
        return state.token
    },
    getUser: state => {
        // console.log("getter getTok")
        return state.userInfo
    }
}

export const mutations = {
    updateResponse:(state, payload) =>{
        state.response = payload
    },

    updateDeviceId: (state, payload) =>{
        state.deviceId = payload
    },

    updateUsers: (state, payload) =>{
        state.users = payload
    },

    updateAuthLoading: (state, payload) =>{
        state.authLoading = payload
    },

    updateScreen: (state, payload) =>{
        state.screen = payload
    },

    updateLoginScreen: (state, payload) =>{
        state.loginScreen = payload
    },

    updateUser: (state, payload) =>{
        state.userInfo = payload
    },

    updateRegScreen: (state, payload) =>{
        state.regScreen = payload
    },

    updateAuthToken: (state, payload) =>{
        console.log("mutation updateAuthToken ==>>", payload)
        state.token = payload
    },

    // eslint-disable-next-line no-unused-vars
    reset: (state, payload) =>{
        state.token = null;
        state.isDocumentsUpt = false;
        state.authLoading = false;
        state.screen = 'login';
        state.regScreen = 'reg';
        state.response ={};
    },
}

export const actions = {
    // eslint-disable-next-line no-unused-vars
    logon: ({ commit, dispatch, rootState }, payload = AuthRequest.logon)=>{
        commit("updateAuthLoading", true)
        return AuthService.callLogonApi(payload)
            .then(response => {
                commit("updateAuthLoading", false);
                let responseData = response.data
                if (responseData.responseCode === "00") {
                    swal('Success!',responseData.responseMessage,'success')
                    localStorage.token = responseData.userToken;
                    commit("updateAuthToken", responseData.userToken);
                    commit("updateUser", responseData);
                    router.push({ name: "MainDashboard"})
                    //todo redirect to dashboard

                }else {
                    swal('Error!',responseData.responseMessage,'error').then();
                }

            })
            .catch((error) => {
                commit("updateAuthLoading", false);
                alert(error+" login");
                // throw error;
                // return Promise.reject(error)
            });
    },

    // validate({ commit }) {
    //     //getting token from local storage
    //     let rtn = false
    //     let userToken = localStorage.token;
    //
    //     //start App Loading
    //     commit("updateAuthLoading", true);
    //
    //     if (userToken === "") {
    //         //stop App Loading
    //         commit("updateAuthLoading", false);
    //         router.push('/login');
    //         // return rtn
    //     } else {
    //         let payload = {
    //             token: ""
    //         };
    //         return AuthService.call(payload)
    //             .then(response=>{
    //                 commit("updateAuthLoading", false);
    //                 let responseData = response.data;
    //                 if (responseData.responseCode === '00'){
    //                     commit("updateUser", responseData);
    //                     rtn = true
    //                     return rtn
    //                 }else{
    //                     return rtn
    //                 }
    //             })
    //             .catch(error=>{
    //                 commit("updateAuthLoading", false);
    //                 alert(error)
    //                 return rtn
    //             })
    //     }
    //
    // },

    initiateResetPassword: ({ commit }, payload)=>{
        commit("updateAuthLoading", true)
       // commit("updateResponse", {})
        return AuthService.callInitiateResetPasswordApi(payload)
            .then(response => {
                commit("updateAuthLoading", false)
                let responseData = response.data;
                if (responseData.responseCode === "00") {
                    swal('Success!',responseData.responseMessage,'success')
                        // eslint-disable-next-line no-unused-vars
                        .then(res=>{commit("updateScreen",'recovery2')});
                }else{
                    swal('Error!',responseData.responseMessage,'error')
                        // eslint-disable-next-line no-unused-vars
                        .then(res=>{commit("updateScreen",'recovery1')});
                }

            })
            .catch(error => {
                commit("updateScreen",'recovery1')
                commit("updateAuthLoading", false)
                alert(error);
                // throw error;
            });
    },

    completeResetPassword: ({ commit }, payload)=>{
        commit("updateAuthLoading", true)
        return AuthService.callCompleteResetPasswordApi(payload)
            .then(response => {
                let responseData = response.data;
                commit("updateAuthLoading", false)
                if (responseData.responseCode === "00") {
                    swal('Success!',responseData.responseMessage,'success')
                        // eslint-disable-next-line no-unused-vars
                        .then(res=>{
                            commit("updateScreen",'recovery1')
                            router.push('/');
                        });
                }else{
                    swal('Error!',responseData.responseMessage,'error')
                        // eslint-disable-next-line no-unused-vars
                        // .then(res=>{
                        //     commit("updateScreen",'recovery1')
                        //     // router.push('/');
                        // });
                }

            })
            .catch(error => {
                commit("updateAuthLoading", false)
                alert(error);
                // throw error;
            });
    },

    verifyToken: ({ commit }, payload)=>{
        commit("updateAuthLoading", true)
        return AuthService.callVerifyTokenApi(payload)
            .then(response => {
                let responseData = response.data;
                commit("updateAuthLoading", false)
                if (responseData.responseCode === "00") {
                    // console.log("callVerifyTokenApi responseData ==>>", responseData);
                    localStorage.clear()
                    swal('Info!',responseData.responseMessage,'info')
                        // eslint-disable-next-line no-unused-vars
                        .then(res=>{commit("updateScreen",'recovery3')});
                }else{
                    swal('Error!',responseData.responseMessage,'error')
                        // eslint-disable-next-line no-unused-vars
                        .then();
                }

            })
            .catch(error => {
                commit("updateAuthLoading", false)
                alert(error);
            });
    },

    changePassword: ({ commit }, payload)=>{
        commit("updateAuthLoading", true)
        return AuthService.callChangePasswordApi(payload)
            .then(response => {
                let responseData = response.data;
                commit("updateAuthLoading", false)
                if (responseData.responseCode === "00") {
                    swal('Success!',responseData.responseMessage,'success')
                }else{
                    swal('Error!',responseData.responseMessage,'error')
                }

            })
            .catch(error => {
                commit("updateAuthLoading", false)
                alert(error);
            });
    },

    initiateEnrollment: ({ commit }, payload = AuthRequest.initiateEnrollment)=>{
       //delete payload.dialogs;
        commit("updateAuthLoading", true)
        //commit("updateResponse", {})
        return AuthService.callInitiateEnrollmentApi(payload)
            .then(response => {
                commit("updateAuthLoading", false)
                let responseData = response.data;
                if (responseData.responseCode === "00") {
                    swal('Success',responseData.responseMessage,'OTP Sent').then(commit( "updateRegScreen",'otp'));
                }else{
                    swal('Error!',responseData.responseMessage,'error')//.then(router.push('/').then);
                    // eslint-disable-next-line no-unused-vars
                        .then(res=>{commit("updateRegScreen",'')});
                }

            })
            .catch((error) => {
                commit("updateAuthLoading", false)
                alert(error);
                // throw error;
            });
    },

    completeEnrollment: ({ commit }, payload)=>{
       //delete payload.dialogs;
        commit("updateAuthLoading", true)
        //commit("updateResponse", {})
        return AuthService.callCompleteEnrollmentApi(payload)
            .then(response => {
                commit("updateAuthLoading", false)
                let responseData = response.data;
                commit("updateResponse", responseData)
                if (responseData.responseCode === "00") {
                    swal('Success!',responseData.responseMessage,'success')
                        // eslint-disable-next-line no-unused-vars
                        .then(res=>{
                            commit("updateRegScreen", 'reg')
                            router.push('/')
                        });
                }else{
                    swal('Error!',responseData.responseMessage,'error').then();
                }

            })
            .catch((error) => {
                commit("updateAuthLoading", false)
                alert(error);
                // throw error;
                // return Promise.reject(error)
            });
    },

    logout: ({ commit }, payload)=>{
        //delete payload.dialogs;
        commit("updateAuthLoading", true)
        commit("updateResponse", {})
        return AuthService.callLogoutApi(payload)
            .then(response => {
                commit("updateAuthLoading", false)
                let responseData = response.data;
                commit("updateResponse", responseData)
                localStorage.clear()
                window.location = window.__env.app.publicPath;
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                commit("updateAuthLoading", false)
                localStorage.clear()
                window.location = window.__env.app.publicPath;
            });
    },

    reset: ({ commit }, payload)=>{
        commit("reset",payload)
    }

}
