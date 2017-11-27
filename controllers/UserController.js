let Wallet           = require('../models/Wallet');
let Transaction      = require('../models/Transaction');
let GlobalController = require('../controllers/GlobalController');

exports.GetWallets = function (req, res, next) {
    let user_id = req.params.id;

    let result = {};
    Wallet.find().where({user: user_id}).exec()
        .then(function (wallets) {
            result = JSON.parse(JSON.stringify(wallets));


            res.json({
                status: 1,
                message: "Got wallets successfully",
                data: result
            });
        });
};

exports.GetTotalInfo = function (req, res, next) {
    let user_id = req.params.id;

    Transaction.find().where({$or: [{source_user: user_id}, {dest_user: user_id}]}).limit(5).sort({created_at: -1}).exec()
        .then(function (transactions) {
            let total = GlobalController.GetTotalTransaction(transactions);

            result = {
                total: total,
                transactions: transactions
            };
            res.json({
                status: 1,
                message: "Got total info successfully",
                data: result
            });
        });
};