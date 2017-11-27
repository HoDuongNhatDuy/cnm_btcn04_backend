let Wallet           = require('../models/Wallet');

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
    res.json({status: 0});
};