const client = require('./client');

const transaction = {
    id: "6426d1a32f23fa216cd0632e"
}

client.deleteTransaction(transaction, (err, response) => {
    if(err) throw err;
    console.log(response);
});