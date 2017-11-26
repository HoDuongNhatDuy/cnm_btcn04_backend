let Wallet = require('../models/Wallet');
let Transaction = require('../models/Transaction');

exports.Create = function (req, res, next) {
    let sourceWalletId = req.body.source_wallet;
    let destWalletId   = req.body.dest_wallet;
    let amount         = req.body.amount;
    let description    = req.body.description;

    let sourceWallet = null;
    let destWallet   = null;

    Wallet.findById(sourceWalletId).exec()
        .then(function (srcWallet) {
            if (srcWallet.errors) {
                res.json({
                    status: 0,
                    message: wallet.errors
                });
                throw err;
            }
            sourceWallet = srcWallet;
            return Wallet.findById(destWalletId).exec();
        })
        .then(function (desWallet) {
            if (desWallet.errors) {
                res.json({
                    status: 0,
                    message: wallet.errors
                });
                throw err;
            }
            destWallet = desWallet;

            let sourceUserId = sourceWallet.user.toString();
            let destUserId   = destWallet.user.toString();

            let newTransaction = new Transaction({
                description: description,
                source_user: sourceUserId,
                source_wallet: sourceWalletId,
                dest_user: destUserId,
                dest_wallet: destWalletId,
                amount: amount,
                created_at: new Date().toISOString()
            });

            newTransaction.save(function (err, transaction) {
                if (err) {
                    res.json({
                        status: 0,
                        message: err.message
                    });
                    throw err;
                }

                res.json({
                    status: 1,
                    message: "Created transaction successfully",
                    data: {
                        transaction_id: transaction.id
                    }
                });
            });
        });
};