const db = require('../../db');

function getTransactions(call, callback) {
    db.getTransactions(call.request.user_id)
        .then(async (transactions) => {
            callback(null, {
                transactions: transactions
            });
        })
        .catch((e) => {
            callback(e);
        });
}

module.exports = getTransactions;