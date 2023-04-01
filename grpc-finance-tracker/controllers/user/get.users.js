const db = require('../../db');

function getUsers(_, callback) {
    db.getUsers()
        .then((users) => {
            callback(null, {
                users: users
            });
        })
        .catch((e) => {
            callback(e);
        });
}

module.exports = getUsers;