const client = require('./client');

client.getTransactions({
    user_id: "60d3d3c4f4f4c4e4a4e4c4f4"
}, (err, transactions) => {
    if(err) throw err;
    console.log(transactions);
});