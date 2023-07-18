//import AccountService from "@/service/AccountService";
//import swal from 'sweetalert'

//import router from "../../router";




export const state = {
    data:[],
    AccountRead: [],
    AccountReadSingle: [],

    screen: 'enquiry',
    AccountLoading: false,
    response:{},

}
export const getters = {

}

export const mutations = {
    updateAccountLoading: (state, payload) =>{
        state.accountLoading = payload
    },
}

export const actions = {

}
