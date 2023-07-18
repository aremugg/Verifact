<template>
  <div class="app-layout">
    <div class="app-nav-layout">
      <div data-collapse="medium" data-animation="over-left" data-duration="400" data-easing="ease-in-out" data-easing2="ease-in-out" role="banner" class="sidebar-navbar w-nav">
        <div class="sidebar-navbar-container w-container">
          <div class="sidebar-navbar-heading">
            <div class="sidebar-navbar-menu-button w-nav-button"></div>
            <a href="#" class="sidebar-navbar-brand w-nav-brand"><img :src="require('@/assets/images/Group-13.svg')" height="30" width="200" alt="" class="sidebar-navbar-brand-logo"><img :src="require('@/assets/images/artboard-color-small.svg')" height="20" alt="" class="sidebar-navbar-brand-logo-small"></a>
          </div>
          <nav role="navigation" class="sidebar-navbar-menu w-nav-menu">
            <div class="sidebar-navbar-body">
              <div class="sidebar-navbar-body-container">
                <router-link to="/dashboard" aria-current="page" class="sidebar-navbar-link link-home w-nav-link w--current">Home<br></router-link>
                <router-link to="/compliance" class="sidebar-navbar-link w-nav-link">Compliance<br></router-link>
                <router-link to ="/verification-management" class="sidebar-navbar-link link-profile w-nav-link">Verifications</router-link>
                <router-link to="/agent-management" class="sidebar-navbar-link link-setting w-nav-link">Agent Management</router-link>
                <a href="#" class="sidebar-navbar-link link-payment w-nav-link">User Management</a>
                <a href="#" class="sidebar-navbar-link link-inbox w-nav-link">Developer</a>
                <a href="#" class="sidebar-navbar-link link-contacts w-nav-link">Payments</a>
                <a href="#" class="sidebar-navbar-link link-projects w-nav-link">Accounts</a>
              </div>
            </div>
            <div class="sidebar-navbar-footer">
              <a href="#" class="sidebar-navbar-link link-help w-nav-link">Help</a>
              <router-link to="/" class="sidebar-navbar-link link-logout w-nav-link">Logout</router-link>
            </div>
            <div class="sidebar-navbar-footer nav-toggle">
              <a data-w-id="4873f219-f9d9-43aa-b29f-ebaa0c79cd44" href="#" class="sidebar-navbar-toggle-button w-button"></a>
            </div>
          </nav>
        </div>
      </div>
      <div class="app-navbar-container">
        <div class="app-navbar-menu">
          <div class="app-navbar-menu-item">
            <div data-delay="0" data-hover="false" class="menu-dropdown w-dropdown">
              <div class="menu-dropdown-toggle dropdown-notification w-dropdown-toggle"></div>
              <nav class="menu-dropdown-list w-dropdown-list">
                <div data-duration-in="300" data-duration-out="100" data-current="Tab 3" data-easing="ease" class="notification-tabs w-tabs">
                  <div class="tabs-menu notification-menu w-tab-menu">
                    <a data-w-tab="Tab 1" class="tab-link notification-tab w-inline-block w-tab-link"><img :src="require('@/assets/images/icons8-notification-center-100_1icons8-notification-center-100.png')" width="25" alt="" class="notification-icon">
                      <div class="hint-2">Notifications</div>
                    </a>
                    <a data-w-tab="Tab 2" class="tab-link notification-tab w-inline-block w-tab-link"><img :src="require('@/assets/images/icons8-sms-100_2icons8-sms-100.png')" width="25" alt="" class="notification-icon">
                      <div class="hint-2">Messages</div>
                    </a>
                    <a data-w-tab="Tab 3" class="tab-link notification-tab w-inline-block w-tab-link w--current"><img :src="require('@/assets/images/icons8-megaphone-100_1icons8-megaphone-100.png')" width="25" alt="" class="notification-icon">
                      <div class="hint-2">News</div>
                    </a>
                  </div>
                  <div class="tabs-content notification-content w-tab-content">
                    <div data-w-tab="Tab 1" class="w-tab-pane">
                      <div class="notification-content-heading">
                        <div>Notifications (3)</div>
                      </div>
                      <div class="notification-content-body">
                        <a href="#" class="notification-item w-inline-block">
                          <div class="notification-item-icon _4"></div>
                          <div class="notification-item-body">
                            <div class="hint-2"><span class="hint-bold">Izabella Watson</span> liked your post.</div>
                            <div class="notification-item-time">2h ago</div>
                          </div>
                        </a>
                        <a href="#" class="notification-item w-inline-block">
                          <div class="notification-item-icon _5"></div>
                          <div class="notification-item-body">
                            <div class="hint-2"><span class="hint-bold">Huan Trent</span> commented on your photo.</div>
                            <div class="notification-item-time">4h ago</div>
                          </div>
                        </a>
                        <a href="#" class="notification-item last w-inline-block">
                          <div class="notification-item-icon _6"></div>
                          <div class="notification-item-body">
                            <div class="hint-2"><span class="hint-bold">Huan Trent and Izabella Watson</span> have birthdays today!<br></div>
                            <div class="notification-item-time">8h ago</div>
                          </div>
                        </a>
                      </div>
                      <div class="notification-content-footer">
                        <a href="#" class="custom-link">View all</a>
                      </div>
                    </div>
                    <div data-w-tab="Tab 2" class="w-tab-pane">
                      <div class="notification-content-heading">
                        <div>Messages (6)</div>
                      </div>
                      <div class="notification-content-body">
                        <a href="#" class="notification-item w-inline-block">
                          <div class="notification-item-icon _1"></div>
                          <div class="notification-item-body">
                            <div class="notification-item-title">Anny Sanders</div>
                            <div class="notification-item-text">This is some text inside of a div block asdsadasdasd.</div>
                          </div>
                          <div class="notification-item-date">1h ago</div>
                        </a>
                        <a href="#" class="notification-item w-inline-block">
                          <div class="notification-item-icon _2"></div>
                          <div class="notification-item-body">
                            <div class="notification-item-title">Jim Cosper</div>
                            <div class="notification-item-text">This is some text inside of a div block asdsadasdasd.</div>
                          </div>
                          <div class="notification-item-date">3h ago</div>
                        </a>
                        <a href="#" class="notification-item w-inline-block">
                          <div class="notification-item-icon _3"></div>
                          <div class="notification-item-body">
                            <div class="notification-item-title">Naton Rodson</div>
                            <div class="notification-item-text">This is some text inside of a div block asdsadasdasd.</div>
                          </div>
                          <div class="notification-item-date">4h ago</div>
                        </a>
                        <a href="#" class="notification-item w-inline-block">
                          <div class="notification-item-icon _4"></div>
                          <div class="notification-item-body">
                            <div class="notification-item-title">Eva Jonson</div>
                            <div class="notification-item-text">This is some text inside of a div block asdsadasdasd.</div>
                          </div>
                          <div class="notification-item-date">8h ago</div>
                        </a>
                        <a href="#" class="notification-item w-inline-block">
                          <div class="notification-item-icon _5"></div>
                          <div class="notification-item-body">
                            <div class="notification-item-title">Huan Trent</div>
                            <div class="notification-item-text">This is some text inside of a div block asdsadasdasd.</div>
                          </div>
                          <div class="notification-item-date">10h ago</div>
                        </a>
                        <a href="#" class="notification-item last w-inline-block">
                          <div class="notification-item-icon _6"></div>
                          <div class="notification-item-body">
                            <div class="notification-item-title">Izabella Watson</div>
                            <div class="notification-item-text">This is some text inside of a div block asdsadasdasd.</div>
                          </div>
                          <div class="notification-item-date">1d ago</div>
                        </a>
                      </div>
                      <div class="notification-content-footer">
                        <a href="#" class="custom-link">View all</a>
                      </div>
                    </div>
                    <div data-w-tab="Tab 3" class="w-tab-pane w--tab-active">
                      <div class="notification-content-heading">
                        <div>News (2)</div>
                      </div>
                      <div class="notification-content-body">
                        <a href="#" class="notification-item w-inline-block">
                          <div class="notification-item-icon _7"></div>
                          <div class="notification-item-body">
                            <div class="notification-item-title">Ecommerce is live</div>
                            <div class="notification-item-text">This is some text inside of a div block asdsadasdasd.</div>
                          </div>
                        </a>
                        <a href="#" class="notification-item last w-inline-block">
                          <div class="notification-item-icon _8"></div>
                          <div class="notification-item-body">
                            <div class="notification-item-title">PayPal is available as payment method.</div>
                          </div>
                        </a>
                      </div>
                      <div class="notification-content-footer">
                        <a href="#" class="custom-link">View all</a>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
          <div class="app-navbar-menu-item">
            <div data-delay="0" data-hover="false" class="menu-dropdown w-dropdown">
              <div class="menu-dropdown-toggle w-dropdown-toggle">
                <div class="navbar-dropdown-avatar"></div>
              </div>
              <nav class="menu-dropdown-list w-dropdown-list">
                <a href="#" class="menu-dropdown-link w-inline-block">
                  <div class="munu-dropdown-link-container"><img :src="require('@/assets/images/icons8-male-user-100-3_1icons8-male-user-100 (3).png')" width="20" alt="" class="menu-dropdown-link-icon">
                    <div>Profile</div>
                    <div class="hint-2 grey-text">Public profile</div>
                  </div>
                </a>
                <a href="#" class="menu-dropdown-link w-inline-block">
                  <div class="munu-dropdown-link-container"><img :src="require('@/assets/images/icons8-settings-100-3.png')" width="20" alt="" class="menu-dropdown-link-icon">
                    <div>Settings</div>
                    <div class="hint-2 grey-text">Account settings</div>
                  </div>
                </a>
                <a href="#" class="menu-dropdown-link w-inline-block">
                  <div class="munu-dropdown-link-container"><img :src="require('@/assets/images/icons8-logout-rounded-left-100-1_1icons8-logout-rounded-left-100 (1).png')" width="20" alt="" class="menu-dropdown-link-icon">
                    <div>Logout</div>
                  </div>
                </a>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="app-main-layout-container">
      <div class="app-main-layout-mask"></div>
      <div class="app-main-layout">
        <div class="app-main-layout-header">
          <div class="app-main-layout-wrapper header">
            <div class="page-heading">
              <h2 class="heading-3">Home</h2>
            </div>
          </div>
        </div>
        <div class="app-main-layout-wrapper body">
          <div class="app-main-layout-content">
            <div class="page-tabs-content">
              <div class="header-wrapper">
                <h1 style="color: white" class="tx-color-03 tx-12 mg-b-0">Welcome {{ auth.userInfo.userFirstName }} 👋,</h1>
                <div class="text-block-6">Let’s get you started with Verificate</div>
              </div>
              <div class="setup-wrapper">
                <div class="div-block-3">
                  <div class="div-block-5">
                    <div class="div-block-7">
                      <div class="text-block-5">Setup Progress</div>
                      <div class="text-block-5-copy">1/3</div>
                    </div>
                    <div>
                      <b-button data-w-id="eafb3af5-5453-a29f-8e7d-9ae9489a40ee" href="#" class="hide-button w-button">Hide</b-button>
                      <b-button data-w-id="18cfbd92-6bfa-f2c1-e3c0-2e82427aa154" style="display:none" href="#" class="show-button w-button">Show</b-button>
                    </div>
                  </div>
                  <div class="div-block-4">
                    <div class="div-block-6">
                      <h1 class="heading-4">Business documents</h1>
                      <div class="text-block-7">Submit compliance details to accept live payments</div>
                      <router-link to="/compliance" class="button-3 w-button">Activate business</router-link>
                    </div>
                    <div class="div-block-6">
                      <h1 class="heading-4">Business details</h1>
                      <div class="text-block-7">Submit compliance details to accept live payments</div>
                      <a href="#" class="button-3-copy w-button">Provide details</a>
                    </div>
                    <div class="div-block-6">
                      <h1 class="heading-4">Uploads business document</h1>
                      <div class="text-block-7">Submit compliance details to accept live payments</div>
                      <a href="#" class="button-3-copy w-button">Upload documents</a>

                    </div>
                  </div>
                </div>
              </div>
              <h4>Recent Verifications</h4>
              <!--begining of bottom table--->
                  <base-table
                      :items="verificationList"
                      :fields="fields"
                      :subfields="fields"
                      :show-title="true"
                      :is-busy="auth.authLoading"
                      class="mt-2"
                      filter-mode="verification"
                  ></base-table>
                </div>
              </div>
            </div>
          </div>
          <div class="footer">
            <div class="w-row">
              <div class="w-col w-col-6">
                <div class="hint-2">© Copyright Verificate. All rights reserved</div>
              </div>
              <div class="footer-right w-col w-col-6">
                <div class="hint-2">
                  <a href="https://webflow.com/" class="footer-link">Powered by Pixelio</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import {mapActions, mapState} from "vuex";
import AuthRequest from "@/model/request/AuthRequest";
import BaseTable from "@/components/Table/BaseTable";
import VerificationRequest from "@/model/request/VerificationRequest";

export default {
  name: "Dashboard",
  components: {BaseTable},
  data(){
    return{
      model: AuthRequest,
      listOfVerifications: VerificationRequest.avcVerificationRead,
      fields: [
        { key: 'verificationId', label: 'Id', sortable: true, sortDirection: 'desc' },
        { key: 'verificationType', label: 'Verification  type', sortable: true, sortDirection: 'text-left' },
        { key: 'verificationChannel', label: 'Channel', sortable: true, sortDirection: 'text-left' },
        { key: 'verificationApplicantFirstName', label: 'Applicant Name', sortable: true, class: 'text-left' },
        { key: 'verificationCreatedAt', label: 'Verification date', sortable: true, sortDirection: 'text-left' },
        { key: 'verificationStatus', label: 'status', sortable: true, sortDirection: 'text-right' },
        { key: 'action', label: 'Action', sortable: true, class: 'text-center' }
      ],
    }
  },
  computed:{
    ...mapState(['auth','system','verification']),
    ...mapActions(['']),
    verificationList() {
      return this.verification.verification
    }
  },
  methods:{
    verifications(){
      this.$store.dispatch('verification/updateVerification',this.listOfVerifications)
    },
  },
  mounted() {
    this.verifications()
  },
  created() {
    this.$store.dispatch("verification/updateVerification", {readAll: 'YES',source: 'WEB'}, {root: false})//.then()
  }
}

</script>

<style scoped>

</style>