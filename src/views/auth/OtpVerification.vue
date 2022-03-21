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
        <div class="single-layout-right-header">Already have an account? <a href="#" class="link-2"><strong>Login</strong></a>
        </div>
        <div class="single-layout-right">
          <div class="single-layout-right-content">
            <div class="single-layout-logo-right">
              <a href="#" class="link-block w-inline-block"><img :src="require('@/assets/images/Verificate-Logo.svg')" width="160" alt=""></a>
            </div>
            <h3 class="text-center mb-40">Verify your account</h3>
            <div class="w-form">
              <form id="email-form" name="email-form" data-name="Email Form" method="get">
                <div class="last-name-wrapper">
                  <div class="text-block-2">Enter </div><input type="text" class="input w-input" maxlength="256" name="Last-Name" data-name="Last Name" placeholder="Enter OTP" id="Last-Name" required="">
                </div><input type="submit" value="Proceed" data-wait="Please wait..." class="button button-primary button-block w-button">
              </form>
              <base-button
                  class="button-4 w-button"
                           style="color: black"
                           loading=""
                           title="Submit">

              </base-button>
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
import BaseButton from "@/components/button/BaseButton";
export default {
  name: "OtpVerification",
  components: {BaseButton},


}



</script>

<style scoped>

</style>