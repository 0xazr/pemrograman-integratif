const client = require('./client');

client.getTransaction({
    id: "64271dfb1029ed7e9daa49bf"
}, (err, transaction) => {
    if(err) throw err;
    console.log(transaction);
});