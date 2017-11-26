let mongoose = require('mongoose');

let WalletSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        description: {type: String, required: true},
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        }
    }
);

//Export model
module.exports = mongoose.model('Wallet', WalletSchema, 'wallets');
