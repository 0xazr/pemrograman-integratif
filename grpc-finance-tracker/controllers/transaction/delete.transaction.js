const db = require('../../db');

function deleteTransaction(call, callback) {
    const transaction = call.request;
    db.deleteTransaction(transaction.id)
        .then((status) => {
            callback(null, {
                status: status
            });
        })
        .catch((e) => {
            callback(e);
        });
}

module.exports = deleteTransaction;