<template>
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
        <div class="single-layout-right">
          <div class="single-layout-right-content">
            <div class="single-layout-logo-right">
              <a href="#" class="link-block w-inline-block"><img :src="require('@/assets/images/Verificate-Logo.svg')" width="160" alt=""></a>
            </div>
            <h3 class="text-center mb-40">Password Reset</h3>
            <p class="mb-40">Enter your <strong>email address</strong> that you used to register. We&#x27;ll send you an email with a link to reset your password.</p>
            <div class="w-form">
              <form @submit.prevent="resetPassword()"  id="email-form" name="email-form" data-name="Email Form" method="get">
                <input v-model="model.AuthRequest.initiateResetPassword.userEmail" type="email" class="input w-input" maxlength="256" name="email" data-name="Email" placeholder="Enter your email" id="email" required>
                <input v-model="model.AuthRequest.initiateResetPassword.countryCode" type="number" class="input w-input" maxlength="3" minlength="3" name="country code" data-name="Email" placeholder="Enter your Country Code" id="country code" required>
                <base-button
                    class="button-4"
                    @click="resetPassword"
                    :loading="auth.authLoading"
                    title="Submit"
                ></base-button>
              </form>

<!--              <div class="success-message w-form-done">-->
<!--                <div>Thank you! Your submission has been received!</div>-->
<!--              </div>-->
<!--              <div class="error-message w-form-fail">-->
<!--                <div>Oops! Something went wrong while submitting the form.</div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import AuthRequest from "@/model/request/AuthRequest";
import {mapActions, mapGetters, mapState} from "vuex";
import BaseButton from "@/components/button/BaseButton";

export default {
  name: "ForgotPassword",
  components: {BaseButton},
  data(){
return {
  model: {
    AuthRequest
  },
  screen: 'stepOne'
}
  },
  computed:{
    ...mapState(["auth"]),
    ...mapActions(["initiateResetPassword"]),
    ...mapGetters([""])

  },
  methods:{
  resetPassword(){
    if(this.model){
      this.$store.dispatch('auth/initiateResetPassword', this.model.AuthRequest.initiateResetPassword, {root:true})
    }
    },
    completeResetPassword(){
    if(this.model){
      this.$store.dispatch('auth/completeResetPassword',this.model.AuthRequest.completeResetPassword, {root:true})
    }
    }
  },
}

</script>

<style scoped>

</style>