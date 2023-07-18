import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store/store'
import VueLottiePlayer from "vue-lottie-player";
//import swal from 'sweetalert';

//import BootstrapVue from "bootstrap-vue"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import * as Vue from "chai";

//Vue.use(BootstrapVue)

//swal();




createApp(App).use(store).use(router).mount('#app')
Vue.use(VueLottiePlayer);


