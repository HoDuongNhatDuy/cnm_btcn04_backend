let Wallet = require('../models/Wallet');

exports.Get = function (req, res, next) {
    res.json({status: 0});
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
        if (err){
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