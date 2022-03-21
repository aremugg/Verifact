class AccountRequest {


    static avcAccountCreate={
    accountNumber: null,
    accountUserId: null,
    accountOpenDate: null,
    accountCloseDate: null,
    accountBalance: null

    }
    static avcAccountRead={
    readAll: null,

    }
    static avcAccountReadSingle={
        accountId: null,

    }
    static avcAccountUpdate={
        accountId: null,
        accountNumber: null,
        accountUserId: null,
        accountOpenDate: null,
        accountCloseDate: null,
        accountBalance: null

    }
    static avcAccountUpdateStatus={
        accountId: null,
        accountStatus: null

    }
}

export default AccountRequest