const express = require('express');
const router = express.Router();

const TransactionsController = require('./../controllers/transactions');

router.route('/')
.get(TransactionsController.getTransactions)
.post(TransactionsController.newTransaction)

router.route('/:id')
.get(TransactionsController.getTransaction)

module.exports = router;