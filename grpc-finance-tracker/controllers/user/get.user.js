const db = require('../../db');

function getUser(call, callback) {
    const creds = call.request;
    db.getUser(creds)
        .then((user) => {
            callback(null, user);
        })
        .catch((e) => {
            callback(e);
        });
}

module.exports = getUser;