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
            <div class="div-block-24">
              <h1 class="heading-5">Verification Management</h1>
              <a href="#" class="button-11 w-button">Download</a>
            </div>
            <div class="page-heading">
              <h2 class="heading-3">Home</h2>
            </div>
          </div>
        </div>
        <div class="app-main-layout-wrapper body">
          <div class="verification-wrapper">
            <div data-duration-in="300" data-duration-out="100" data-current="Tab 1" data-easing="ease" class="tabs w-tabs">
              <div class="align-right w-tab-menu">
                <a data-w-tab="Tab 1" class="switcher-tab left w-inline-block w-tab-link w--current">
                  <div>All Requests</div>
                </a>
                <a data-w-tab="Tab 6" class="switcher-tab left w-inline-block w-tab-link">
                  <div>Approved request</div>
                </a>
                <a data-w-tab="Tab 7" class="switcher-tab left w-inline-block w-tab-link">
                  <div>Pending request</div>
                </a>
              </div>
              <div class="chart-tab-content w-tab-content">
                <div data-w-tab="Tab 1" class="w-tab-pane w--tab-active">
                  <div class="section-2">
                    <div class="section-inner">
                      <div class="card no-padding receipt-table">
                        <div class="table-header">
                          <div class="card-setting-text caption">Name</div>
                          <div class="card-setting-text caption">Agent</div>
                          <div class="card-setting-text caption">Type</div>
                          <div class="card-setting-text caption">Amount</div>
                          <div class="card-setting-text caption">status</div>
                        </div>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Monthly subscription</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text pending">PENDING</div>
                          </div>
                        </a>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Monthly subscription</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text approved">APPROVED</div>
                          </div>
                        </a>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Monthly subscription</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text approved">APPROVED</div>
                          </div>
                        </a>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Monthly subscription</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text completed">PENDING</div>
                          </div>
                        </a>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Monthly subscription</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text completed">PENDING</div>
                          </div>
                        </a>
                        <div style="justify-content: center; display: flex; align-content: center"
                            class="pagination">
                          <div class="div-block-27">
                            <div>Prev</div>
                            <a href="#" class="_1 w-inline-block">
                              <div class="text-block-16-copy">1</div>
                            </a>
                            <a href="#" class="_2 w-inline-block">
                              <div class="text-block-16">2</div>
                            </a>
                            <a href="#" class="_3 w-inline-block">
                              <div class="text-block-16">3</div>
                            </a>
                            <div>Next</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 6" class="w-tab-pane">
                  <div class="section-2">
                    <div class="section-inner">
                      <div class="card no-padding receipt-table">
                        <div class="table-header">
                          <div class="card-setting-text caption">Name</div>
                          <div class="card-setting-text caption">Agent</div>
                          <div class="card-setting-text caption">Type</div>
                          <div class="card-setting-text caption">Amount</div>
                          <div class="card-setting-text caption">status</div>
                        </div>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Monthly subscription</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text approved">APPROVED</div>
                          </div>
                        </a>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Monthly subscription</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text approved">APPROVED</div>
                          </div>
                        </a>
                        <div class="pagination">
                          <div class="div-block-27">
                            <div>Prev</div>
                            <a href="#" class="_1 w-inline-block">
                              <div class="text-block-16-copy">1</div>
                            </a>
                            <a href="#" class="_2 w-inline-block">
                              <div class="text-block-16">2</div>
                            </a>
                            <a href="#" class="_3 w-inline-block">
                              <div class="text-block-16">3</div>
                            </a>
                            <div>Next</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div data-w-tab="Tab 7" class="w-tab-pane">
                  <div class="section-2">
                    <div class="section-inner">
                      <div class="card no-padding receipt-table">
                        <div class="table-header">
                          <div class="card-setting-text caption">Name</div>
                          <div class="card-setting-text caption">Agent</div>
                          <div class="card-setting-text caption">Type</div>
                          <div class="card-setting-text caption">Amount</div>
                          <div class="card-setting-text caption">status</div>
                        </div>
                        <router-link to="/verification-management-View" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text pending">PENDING</div>
                          </div>
                        </router-link>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text completed">PENDING</div>
                          </div>
                        </a>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text completed">PENDING</div>
                          </div>
                        </a>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text completed">PENDING</div>
                          </div>
                        </a>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text completed">PENDING</div>
                          </div>
                        </a>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text completed">PENDING</div>
                          </div>
                        </a>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text completed">PENDING</div>
                          </div>
                        </a>
                        <a href="#" class="table-details-row w-inline-block">
                          <div class="receipt-row-2">
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text">Ademola Moshood</div>
                            <div class="card-setting-text primary-text">Address Verification</div>
                            <div class="card-setting-text primary-text">₦2,500.00</div>
                            <div class="card-setting-text completed">PENDING</div>
                          </div>
                        </a>
                        <div class="pagination">
                          <div class="div-block-27">
                            <div>Prev</div>
                            <a href="#" class="_1 w-inline-block">
                              <div class="text-block-16-copy">1</div>
                            </a>
                            <a href="#" class="_2 w-inline-block">
                              <div class="text-block-16">2</div>
                            </a>
                            <a href="#" class="_3 w-inline-block">
                              <div class="text-block-16">3</div>
                            </a>
                            <div>Next</div>
                          </div>
                        </div>
                      </div>
                    </div>
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
  name: "VerificationManagement"
}
</script>

<style scoped>

</style>