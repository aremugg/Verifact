import logon from "../../views/auth/Logon";
import dashboard from "../../views/auth/Dashboard";
import signUp from "../../views/auth/SignUp";
import signUpSuccessful from "../../views/auth/SignUpSucessful";
import forgotPassword from "../../views/auth/ForgotPassword";
import otpVerification from "../../views/auth/OtpVerification";


export default [
    {
        path: '/',
        name: 'Logon',
        meta: {layout: 'auth',authRequired:true},
        component: logon,
    },
    {
        path: '/dashboard',
        name: 'MainDashboard',
        meta: {layout: 'auth',authRequired:true},
        component: dashboard,
    },
    {
        path: '/sign-up',
        name: 'SignUp',
        meta: {layout: 'auth',authRequired:true},
        component: signUp,
    },
    {
        path: '/sign-up-successful',
        name: 'SignUpSuccessful',
        meta: {layout: 'auth',authRequired:true},
        component: signUpSuccessful,
    },
    {
        path: '/forgot-password',
        name: 'ForgotPassword',
        meta: {layout: 'auth',authRequired:true},
        component: forgotPassword,
    },
    {
        path: '/otp',
        name: 'OtpVerification',
        meta: {layout: 'auth',authRequired:true},
        component: otpVerification,
    },
]