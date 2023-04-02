const db = require('../../db');

function addTransaction(call, callback) {
    const transaction = call.request;
    console.log(transaction);
    db.addTransaction(transaction)
        .then((status) => {
            callback(null, {
                status: status
            });
        })
        .catch((e) => {
            callback(e);
        });
}


module.exports = addTransaction;
