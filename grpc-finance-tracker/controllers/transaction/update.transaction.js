const db = require('../../db');

function updateTransaction(call, callback) {
    const { id, description, category, amount, date } = call.request;
    let transaction = {};
    if (description) {
        transaction.description = description;
    }
    if (category) {
        transaction.category = category;
    }
    if (amount) {
        transaction.amount = amount;
    }
    if (date) {
        transaction.date = date;
    }
    if (Object.keys(transaction).length === 0) {
        callback(new Error('No valid transaction data provided'));
    } else {
        db.updateTransaction(id, transaction)
            .then((status) => {
                callback(null, {
                    status: status
                });
            })
            .catch((e) => {
                callback(e);
            });
    }
}

module.exports = updateTransaction;