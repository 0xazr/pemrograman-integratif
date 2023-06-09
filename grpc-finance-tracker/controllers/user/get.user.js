const db = require('../../db');

function getUser(call, callback) {
    const creds = call.request;
    db.getUser(creds)
        .then((user) => {
            // dont send password back to client
            // remove password from user object
            user.password = undefined;
            callback(null, user);
        })
        .catch((e) => {
            callback(e);
        });
}

module.exports = getUser;