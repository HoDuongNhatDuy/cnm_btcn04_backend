let Wallet = require('../models/Wallet');
let Transaction = require('../models/Transaction');

exports.GetTotalTransaction = function (transactions) {
    let total = 0;
    transactions.forEach(function (transaction, index) {
        total += transaction.amount;
    });

    return total;
};