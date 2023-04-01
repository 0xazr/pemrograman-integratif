const db = require('../../db');

function getTransaction(call, callback) {
    db.getTransaction(call.request.id)
        .then((transaction) => {
            callback(null, transaction);
        })
        .catch((e) => {
            callback(e);
        });
}

module.exports = getTransaction;