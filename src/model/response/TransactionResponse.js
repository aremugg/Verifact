class TransactionResponse {
    static avcTransactionCreate={
        responseCode: null,
        responseMessage: null
    }
    static avcTransactionRead={
        responseCode: null,
        responseMessage: null,
        data:[]
    }

    static data={
        transactionId: null,
        transactionDate: null,
        transactionChannel:null,
        transactionType:null,
        transactionAmount:null,
        transactionFee: null,
        transactionLedgerId: null,
        transactionReference: null,
        transactionStatus:null,
        transactionUpdatedAt: null,
        transactionCreatedAt: null
    }
    static avcTransactionReadSingle={
        transactionId: null,
        transactionDate:null,
        transactionChannel: null,
        transactionType: null,
        transactionAmount: null,
        transactionFee: null,
        transactionLedgerId: null,
        transactionReference: null,
        transactionStatus: null,
        transactionUpdatedAt: null,
        transactionCreatedAt: null,
        responseCode: null,
        responseMessage: null
    }
    static avcTransactionUpdate={
        responseCode: null,
        responseMessage: null
    }
    static avcTransactionUpdateStatus={
        responseCode: null,
        responseMessage: null
    }
}

export default TransactionResponse