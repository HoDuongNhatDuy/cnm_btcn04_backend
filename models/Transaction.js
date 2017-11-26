var mongoose = require('mongoose');

var TransactionSchema = new mongoose.Schema(
    {
        description: {type: String, required: true},
        from_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        from_wallet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Wallet'
        },
        to_user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        to_wallet: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Wallet'
        },
        amount: {type: Number, required: true},
        created_at: {type: String}
    }
);

//Export model
module.exports = mongoose.model('Transaction', TransactionSchema, 'transactions');
