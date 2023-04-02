const db = require('../../db');

function getUserById(call, callback) {
    const id = call.request;
    db.getUserById(id)
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

module.exports = getUserById;