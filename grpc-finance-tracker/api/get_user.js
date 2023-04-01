const client = require('./client');

const user = {
    email: "johndoe@example.com",
    password: "password1"
};

client.getUser(user, (err, user) => {
    if(err) throw err;
    console.log(user);
});