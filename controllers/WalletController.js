let Wallet           = require('../models/Wallet');
let Transaction      = require('../models/Transaction');
let GlobalController = require('../controllers/GlobalController');

exports.Get = function (req, res, next) {
    let wallet_id = req.params.id;

    let result = {};
    Wallet.findById(wallet_id).exec()
        .then(function (wallet) {
            result = JSON.parse(JSON.stringify(wallet));

            Transaction.find().where({$or: [{source_user: wallet.user}, {dest_user: wallet.user}]}).exec()
                .then(function (transactions) {
                    let total = GlobalController.GetTotalTransaction(transactions);

                    result.total        = total;
                    result.transactions = transactions;
                    res.json({
                        status: 1,
                        message: "Got wallet successfully",
                        data: result
                    });
                });
        });
};

exports.GetTransactions = function (req, res, next) {
    res.json({status: 0});
};

exports.Create = function (req, res, next) {
    // let name        = req.body.name;
    // let description = req.body.description;
    // let userId      = req.body.user_id;

    let newWallet = new Wallet(req.body);
    newWallet.save(function (err, wallet) {
        if (err) {
            res.json({
                status: 0,
                message: err.message
            });
            return;
        }

        res.json({
            status: 1,
            message: 'Created wallet successfully',
            data: {
                wallet_id: newWallet.id
            }
        });
    })
};

exports.Update = function (req, res, next) {
    res.json({status: 0});
};

exports.Delete = function (req, res, next) {
    res.json({status: 0});
};