import swal from 'sweetalert'
import verificationService from "@/service/VerificationService";

export const state = {
    verification: [],
    data: [],
    screen: '',
    response:{},
    verificationLoading: false
}

export const mutations = {
    updateResponse:(state, payload) =>{
        state.response = payload
    },
    updateVerificationLoading:(state, payload) =>{
        state.verificationLoading = payload
    },
    updateVerification:(state, payload) =>{
        state.verification = payload
    },
    updateScreen:(state, payload) =>{
        state.screen = payload
    }


}
export const actions = {

    createVerification: ({ commit }, payload)=>{
        commit("updateVerificationLoading", true)
        return verificationService.callCreateVerificationApi(payload)
            .then(response => {
                commit("updateVerificationLoading", false)
                let responseData = response.data
                if (response.data.responseCode === "00") {
                    swal('Success!', responseData.responseMessage, 'success').then()
                }else{
                    swal('Error!', responseData.responseMessage, 'error').then()
                }
            })
            .catch(error => {
                commit("updateVerificationLoading", false)
                alert(error)
                // throw error;
            });
    },
    updateVerification: ({ commit }, payload)=>{
        commit("updateVerificationLoading", true)
        return verificationService.callReadVerificationApi(payload)
            .then(response => {
                commit("updateVerificationLoading", false)
                let responseData = response.data;
                if (responseData.responseCode === "00") {
                    commit("updateVerification", responseData.data)

                }

            })
            .catch(error => {
                commit("updateVerificationLoading", false)
                alert(error)
                // throw error;
            });
    },
}