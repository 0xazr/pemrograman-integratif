const client = require('./client');

const transaction = {
    id: "64268a18b6e8bc8d452ca43c",
    category: "Test",
}

client.updateTransaction(transaction, (err, response) => {
    if(err) throw err;
    console.log(response);
});