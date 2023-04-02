const client = require('./client');

const user = {
    id: "642689b9b6e8bc8d452ca438"
};

client.getUserById(user, (err, user) => {
    if(err) throw err;
    console.log(user);
});