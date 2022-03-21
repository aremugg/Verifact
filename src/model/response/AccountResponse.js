class AccountResponse {

    static avcAccountCreate={
        responseCode: null,
        responseMessage: null
    }
    static avcAccountRead={
        responseCode: null,
        responseMessage: null,
        data: []
    }
    static data={
        accountId: null,
        accountNumber: null,
        accountUserId: null,
        accountOpenDate: null,
        accountCloseDate: null,
        accountBalance: null,
        accountStatus: null,
        accountUpdatedAt: null,
        accountCreatedAt: null

    }

    static avcAccountReadSingle={
        accountId: null,
        accountNumber: null,
        accountUserId: null,
        accountOpenDate: null,
        accountCloseDate: null,
        accountBalance: null,
        accountStatus: null,
        accountUpdatedAt: null,
        accountCreatedAt: null,
        responseCode: null,
        responseMessage: null
    }

    static avcAccountUpdate={
        responseCode: null,
        responseMessage: null
    }

    static avcAccountUpdateStatus={
        responseCode: null,
        responseMessage: null
    }
}
export default AccountResponse