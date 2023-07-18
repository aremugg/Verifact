class AuthRequest {
    static initiateEnrollment={
        userFirstName: null,
        userLastName: null,
        userOrganisationId: 1,
        userPhone: null,
        userEmail: null,
        userType: null,
        userGender: null,
        userDateOfBirth: null,
        userAddress: null,
        userStateOfResidence: null,
        userLGA: null,
        userBikeStatus: 'ACTIVE',
        userCountry: null,
        userBVN: null
    }
    static completeEnrollment={
        userEmail: null,
        userOtp:null,
        userPassword: null,
        userPasswordConfirmation: null
    }
    static initiateResetPassword={
        countryCode: null,
        userEmail: null
    }
    static completeResetPassword={
        userEmail: null,
        userOtp: null,
        password: null,
        passwordConfirmation: null
    }
    static logon={
        username:null,
        password: null,
        source: null
    }
    static logout={
       accountId:null,
       accountStatus:null
    }

}

export default AuthRequest