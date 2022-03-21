<template>
<div class="body">
  <div class="single-layout">
    <div class="single-layout-row w-row">
      <div class="single-layout-col left w-col w-col-4">
        <div class="single-layout-left">
          <a href="#" class="single-layout-logo w-inline-block"><img :src="require('@/assets/images/Group-13.svg')" width="160" alt=""></a>
          <div><img :src="require('@/assets/images/Verificate_logo_transparent.svg')" loading="lazy" width="89" alt=""></div>
          <div class="div-block-2">
            <h4 class="white">Welcome onboard!</h4>
            <p class="white text-large">A few clicks from creating your personal or admin dashboard. </p>
            <p class="white text-large">Save your time and money!</p>
            <a href="#" class="button button-primary mt-20 w-button">Learn more</a>
          </div>
        </div>
      </div>
      <div class="single-layout-col right w-col w-col-8">
        <div class="single-layout-right-header">Don&#x27;t have account? <router-link to="/sign-up" class="link-2"><strong>Sign up</strong></router-link>
        </div>
        <div class="single-layout-right">
          <div class="single-layout-right-content">
            <div class="single-layout-logo-right">
              <a href="#" class="link-block w-inline-block"><img :src="require('@/assets/images/Verificate-Logo.svg')" width="160" alt=""></a>
            </div>
            <h3 class="text-center mb-40">Sign in to Verificate</h3>
            <div class="w-form">
              <form @submit.prevent="login" id="email-form" name="email-form" data-name="Email Form" method="get">
                <input type="email" required v-model="model.username" class="input w-input" maxlength="256" name="email" data-name="Email" placeholder="Enter your email" id="email" >
                <input type="password" required v-model="model.password" class="input w-input" maxlength="256" name="password" data-name="Password" placeholder="Enter your password" id="password" >
               <div style="text-align: left; margin-bottom: 5px">
                 <input type="checkbox" id="checkbox" name="checkbox" data-name="Checkbox" > Remember me
               </div>
                <base-button
                    :loading="auth.authLoading"
                    title="Login"
                ></base-button>
                <p class="text-center hint">
                  <router-link to="/forgot-password" class="link-2">Forgot your password?</router-link>
                </p>
              </form>
              <div class="success-message w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="error-message w-form-fail">
                <div>Oops! Something went wrong while submitting the form.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import AuthRequest from "@/model/request/AuthRequest";
import {mapState, mapActions, mapGetters} from "vuex"
import BaseButton from "@/components/button/BaseButton";

export default {
  name: "Logon",
  components: {BaseButton},
  data(){
    return {
      model: AuthRequest.logon
    }
  },
  computed:{
    ...mapState([
      'auth',

    ]),
    ...mapActions(["logon"]),
    ...mapGetters([""])
  },
  methods:{
    login(){
      if(this.model){
        this.$store.dispatch('auth/logon', this.model, {root:true})
      }
      else{
        console.log("..")
      }
    }
  }
}
</script>

<style scoped>

</style>