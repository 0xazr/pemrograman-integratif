const addTransaction = require('./add.transaction');
const getTransactions = require('./get.transactions');
const getTransaction = require('./get.transaction');
const deleteTransaction = require('./delete.transaction');
const updateTransaction = require('./update.transaction');

module.exports = {
    addTransaction,
    getTransactions,
    getTransaction,
    deleteTransaction,
    updateTransaction
};