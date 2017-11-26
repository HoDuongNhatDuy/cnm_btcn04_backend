var express = require('express');
var AuthController = require('../controllers/AuthController');
var WalletController = require('../controllers/WalletController');
var UserController = require('../controllers/UserController');
var router = express.Router();

router.post('/register', AuthController.Register);
router.post('/login', AuthController.Login);

router.get('/wallet/:id', WalletController.Get); // pending
router.get('/wallet/:id/transaction', WalletController.GetTransactions); // pending
router.post('/wallet', WalletController.Create);
router.put('/wallet/:id', WalletController.Update); // pending
router.delete('/wallet/:id', WalletController.Delete); // pending

router.get('/user/wallet', UserController.GetWallets); // pending
router.get('/user/total-info', UserController.GetTotalInfo); // pending

router.post('/transaction'); // pending

module.exports = router;
