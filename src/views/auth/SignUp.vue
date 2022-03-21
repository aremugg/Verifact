<template>
  <div class="sign-up-body">
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
        <div class="single-layout-right-header">Already have an account? <router-link to="/" class="link-2"><strong>Login</strong></router-link>
        </div>
        <div class="single-layout-right">
          <div class="single-layout-right-content">
            <div class="single-layout-logo-right">
              <a href="#" class="link-block w-inline-block"><img :src="require('@/assets/images/Verificate-Logo.svg')" width="160" alt=""></a>
            </div>
              <div v-if="auth.regScreen === 'reg'">
            <div class="w-form" v-if="screen === 'stepOne'">
              <form @submit.prevent = "register()" id="email-form" name="email-form" data-name="Email Form" method="get">
                <!--TODO STEP 1-->
                <h3 class="text-center mb-40">Register your account</h3>
                <div class="row">
                <div class="first-name-wrapper">
                  <div class="text-block-2" >First Name</div>
                  <input type="text" v-model="model.AuthRequest.initiateEnrollment.userFirstName" class="input w-input" maxlength="256" name="First-Name" data-name="First Name" placeholder="Enter your first name" id="First-Name" required>
                </div>
                <div class="last-name-wrapper">
                  <div class="text-block-2">Last Name</div>
                  <input type="text" v-model="model.AuthRequest.initiateEnrollment.userLastName" class="input w-input" maxlength="256" name="Last-Name" data-name="Last Name" placeholder="Enter your last name" id="Las-Name" required>
                </div>
                <div class="last-name-wrapper">
                  <div class="text-block-2">Phone Number </div>
                  <input type="number" v-model="model.AuthRequest.initiateEnrollment.userPhone" class="input w-input" maxlength="11" minlength="11" name="Business-name" data-name="Business name" placeholder="Enter your Phone number" id="Business-nam2" required>
                </div>
                  <div class="last-name-wrapper">
                    <div class="text-block-2">Date of birth</div>
                    <input type="date" v-model="model.AuthRequest.initiateEnrollment.userDateOfBirth" class="input w-input" maxlength="256" name="Business-name" data-name="Business name" placeholder="Date of birth" id="Business-name5" required>
                  </div>
                <div class="last-name-wrapper">
                  <div class="text-block-2">USER TYPE </div>
                  <input type="text" v-model="model.AuthRequest.initiateEnrollment.userType" class="input w-input" maxlength="256" name="Business-name" data-name="Business name" placeholder="Enter your User Type" id="Business-nam3" required>
                </div>
                <div class="last-name-wrapper">
                  <div class="text-block-2">GENDER</div>
                  <input type="text" v-model="model.AuthRequest.initiateEnrollment.userGender" class="input w-input" maxlength="256" name="Business-name" data-name="Business name" placeholder="Gender" id="Business-nam4" required>
                </div>
                  <base-button
                      @click = "toScreenTwo"
                      class="button-4"
                      :loading="auth.authLoading"
                      title="Next"
                  ></base-button>
                </div>
              </form>
            </div>
              <!--TODO 2ND SCREEN -->

              <div>
                <form  v-if="screen === 'stepTwo'"  @submit.prevent = "register()" id="email-form2" name="email-form" data-name="Email Form" method="get">
                  <div class="row">
                    <div class="last-name-wrapper">
                      <div class="text-block-2">User Address</div>
                      <input type="text" v-model="model.AuthRequest.initiateEnrollment.userAddress" class="input w-input" maxlength="256" name="Business-name" data-name="Business name" placeholder="Address" id="Business-nam" required>
                    </div>
                    <div class="last-name-wrapper">
                      <div class="text-block-2">State of Residence</div>
                      <input type="text" v-model="model.AuthRequest.initiateEnrollment.userStateOfResidence" class="input w-input" maxlength="256" name="Business-name" data-name="Business name" placeholder="State of residence" id="Business-name6" required>
                    </div>
                    <div class="last-name-wrapper">
                      <div class="text-block-2"> User LGA</div>
                      <input type="text" v-model="model.AuthRequest.initiateEnrollment.userLGA" class="input w-input" maxlength="256" name="Business-name" data-name="Business name" placeholder="Local Government Area" id="Business-name7" required>
                    </div>
                    <div class="last-name-wrapper">
                      <div class="text-block-2">User Country </div>
                      <input type="text" v-model="model.AuthRequest.initiateEnrollment.userCountry" class="input w-input" maxlength="256" name="Business-name" data-name="Business name" placeholder="Country..." id="Business-name9" required>
                    </div>
                    <div class="last-name-wrapper">
                      <div class="text-block-2">User BVN</div>
                      <input type="number" v-model="model.AuthRequest.initiateEnrollment.userBVN" class="input w-input" maxlength="11" minlength="11" name="Business-name" data-name="Business name" placeholder="Enter your BVN" id="Business-name" required>
                    </div>
                    <div class="last-name-wrapper">
                      <div class="text-block-2">Email Address</div>
                      <input type="email" v-model="model.AuthRequest.initiateEnrollment.userEmail" class="input w-input" maxlength="256" name="Email-address" data-name="Email address" placeholder="Enter your email address" id="Email-address" required>
                    </div>
                    <div style="text-align: left; margin-bottom: 5px">
                      <input type="checkbox" id="checkbox" name="checkbox" required data-name="Checkbox" >I have read, understood and I agree to Verificate <a href="#" class="link-4">Privacy Policy </a>and <a href="#" class="link-5" >Terms and conditions</a>
                    </div>
                    <div style=" justify-content: left; display: flex; margin-left: -5px" >

                      <a style="margin: 10px"
                         @click = "screen ='stepOne'"
                         class="button button-primary mt-20 w-button"
                      >Previous</a>
                      <base-button
                          style="margin:10px; float: inside "
                          @click = "register"
                          class=""
                          :loading="auth.authLoading"
                          title="Submit"
                      ></base-button>
                    </div>

                  </div>
                </form>
              </div>
            </div>
            <!-- Todo OTP Screen -->
            <div>
              <form v-if="auth.regScreen === 'otp'" @submit.prevent=" OTPVerification"  name="email-form" data-name="Email Form" method="get">
                <div v-if="screen === 'stepTwo'" class="row">
                  <h3 class="text-center mb-40">Verify your account</h3>
                  <div class="w-form">
                    <div class="last-name-wrapper">
                      <div class="text-block-2">User Email </div>
                      <input type="email"   v-model="model.AuthRequest.completeEnrollment.userEmail" class="input w-input" maxlength="256" name="Business-name" data-name="Business name" placeholder="Email" id="" required>
                    </div>
                    <div class="last-name-wrapper">
                      <div class="text-block-2">Enter Password </div>
                      <input type="password"  v-model="model.AuthRequest.completeEnrollment.userPassword" class="input w-input" maxlength="6" minlength="6" name="Business-name" data-name="Business name" placeholder="Password" id="y" required>
                    </div>
                    <div class="last-name-wrapper">
                      <div class="text-block-2">Confirm Password </div>
                      <input type="password" v-model="model.AuthRequest.completeEnrollment.userPasswordConfirmation" class="input w-input" maxlength="6" minlength="6" name="Business-name" data-name="Business name" placeholder="Confirm Password" id="j" required>
                    </div>
                    <div class="last-name-wrapper">
                      <div class="text-block-2">Enter OTP</div>
                      <input v-model="model.AuthRequest.completeEnrollment.userOtp" type="text" class="input w-input" maxlength="6"  minlength="6" name="Last-Name" data-name="Last Name" placeholder="Enter OTP" id="Last-Name" required>
                    </div>
                  </div>
                    <base-button
                        class="button-4"
                        @click = "OTPVerification"
                        :loading="auth.authLoading"
                        title="Proceed"
                    ></base-button>

                </div>
              </form>
            </div>

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
</template>

<script>
import AuthRequest from "@/model/request/AuthRequest";
import {mapActions, mapGetters, mapState} from "vuex";
import BaseButton from "@/components/button/BaseButton";


export default {
  name: "signUp",
  components: {BaseButton},
  data(){
    return{

      model: {
      AuthRequest
      },
      screen: 'stepOne'


    }
  },
  computed:{
    ...mapState([
        "auth"
    ]),
    ...mapActions(["reg"]),
    ...mapGetters([""])

  },
  methods:{
    register(){
      if (this.model){
     this.$store.dispatch('auth/initiateEnrollment', this.model.AuthRequest.initiateEnrollment, {root:true})
      }

    },
    OTPVerification() {
      if (this.model) {
        this.$store.dispatch("auth/completeEnrollment", this.model.AuthRequest.completeEnrollment, {root: false})
      }
      else {
        console.log('chaii')
      }
    },
    toScreenTwo(){
      if(this.model.AuthRequest.initiateEnrollment.userFirstName && this.model.AuthRequest.initiateEnrollment.userLastName &&
          this.model.AuthRequest.initiateEnrollment.userPhone && this.model.AuthRequest.initiateEnrollment.userType && this.model.AuthRequest.initiateEnrollment.userGender)
        this.screen = 'stepTwo'


    },
  }
}
</script>

<style scoped>
.error-msg{
  color: red;
  font-size: 10px;
  margin-top:-2px;
}
</style>