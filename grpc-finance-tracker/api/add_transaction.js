const client = require('./client');

client.addTransaction({
    user_id: "642689b9b6e8bc8d452ca438",
    description: "Test transaction",
    category: "Test",
    amount: 100,
    date: new Date()
}, (err, response) => {
    if(err) throw err;
    console.log(response);
});