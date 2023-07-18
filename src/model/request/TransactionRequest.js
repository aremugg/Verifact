class TransactionRequest {
    static avcTransactionCreate={
        transactionDate: null,
        transactionChannel: null,
        transactionType: null,
        transactionAmount: null,
        transactionFee: null,
        transactionLedgerId: null,
        transactionReference: null
    }
    static avcTransactionRead={
        readAll: null
    }
    static avcTransactionReadSingle={
        transactionId: null
    }
    static avcTransactionUpdate={
        transactionId: null,
        transactionDate: null,
        transactionChannel: null,
        transactionType: null,
        transactionAmount: null,
        transactionFee: null,
        transactionLedgerId: null,
        transactionReference: null
    }
    static avcTransactionUpdateStatus={
        transactionId: null,
        transactionStatus: null
    }
}

export default TransactionRequest