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
              <a href="#" class="sidebar-navbar-link link-logout w-nav-link">Logout</a>
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
            <h1 class="heading-5">Compliance</h1>
            <div class="page-heading">
              <h2 class="heading-3">Home</h2>
            </div>
          </div>
        </div>
        <div class="app-main-layout-wrapper body">
          <div class="compliance-wrapper">
            <div class="progress-nav">
              <div class="div-block-14">
                <div class="div-block-12">
                  <div class="no-bar"></div>
                </div>
                <div class="text-block-10">0 of 3 complete</div>
              </div>
              <div class="div-block-15">
                <div class="div-block-16"><img :src="require('@/assets/images/1.svg')" loading="lazy" width="20" alt=""></div>
                <div>
                  <div>Company Profile</div>
                </div>
              </div>
              <div class="div-block-15">
                <div class="div-block-16"><img :src="require('@/assets/images/Ellipse-38.svg')" loading="lazy" width="20" alt=""></div>
                <div>
                  <div>Bank Details</div>
                </div>
              </div>
              <div class="div-block-15">
                <div class="div-block-16"><img :src="require('@/assets/images/Ellipse-38.svg')" loading="lazy" width="20" alt=""></div>
                <div>
                  <div>Document upload</div>
                </div>
              </div>
            </div>
            <div class="div-block-11">
              <div class="div-block-17">
                <div class="text-block-11">Company Profile</div>
                <div class="form-block-2 w-form">
                  <form id="email-form" name="email-form" data-name="Email Form" redirect="https://verificate-web-portal.webflow.io/compliance-form-filled" data-redirect="https://verificate-web-portal.webflow.io/compliance-form-filled" method="get">
                    <div class="rc-number">
                      <div class="text-block-2">Business RC Number</div><input type="text" class="input w-input" maxlength="256" name="First-Name" data-name="First Name" placeholder="" id="First-Name" required="">
                    </div>
                    <div class="rc-number">
                      <div class="text-block-2">Director&#x27;s Full Name</div><input type="text" class="input w-input" maxlength="256" name="First-Name-2" data-name="First Name 2" placeholder="" id="First-Name-2" required="">
                    </div>
                    <div class="rc-number">
                      <div class="text-block-2">Director&#x27;s Phone Number</div><input type="text" class="input w-input" maxlength="256" name="First-Name-2" data-name="First Name 2" placeholder="" id="First-Name-3" required="">
                    </div>
                    <div class="rc-number">
                      <div class="text-block-2">Director&#x27;s Email Address</div><input type="text" class="input w-input" maxlength="256" name="First-Name-2" data-name="First Name 2" placeholder="" id="First-Name-4" required="">
                    </div>
                    <div class="rc-number">
                      <div class="text-block-2">Director&#x27;s Gender</div><input type="text" class="input w-input" maxlength="256" name="First-Name-2" data-name="First Name 2" placeholder="" id="First-Name-5" required="">
                    </div>
                    <div class="rc-number">
                      <div class="text-block-2">Director&#x27;s Address</div><input type="text" class="input w-input" maxlength="256" name="First-Name-2" data-name="First Name 2" placeholder="" id="First-Name-6" required="">
                    </div><input type="submit" value="Save" data-wait="Please wait..." class="submit-button-2 w-button">
                    <router-link to="/compliance-bank-details-complete" class="button-5 w-button">Save</router-link>
                  </form>
                  <div class="w-form-done">
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div class="w-form-fail">
                    <div>Oops! Something went wrong while submitting the form.</div>
                  </div>
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
    </div>
  </div>
</template>

<script>
export default {
  name: "Compliance"
}
</script>

<style scoped>

</style>