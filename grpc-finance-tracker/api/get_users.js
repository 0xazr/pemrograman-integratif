const client = require('./client');

client.getUsers({}, (err, users) => {
    if(err) throw err;
    console.log(users);
});

