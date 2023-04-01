const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
require('./lib/mongo');

const packageDefinition = protoLoader.loadSync('./financetracker.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const financeTrackerServicePackageDefinition = grpc.loadPackageDefinition(packageDefinition).transaction;
const Controller = require('./controllers');


const server = new grpc.Server();
server.addService(financeTrackerServicePackageDefinition.FinanceTrackerService.service, {
    addTransaction: Controller.Transaction.addTransaction,
    getTransactions: Controller.Transaction.getTransactions,
    getTransaction: Controller.Transaction.getTransaction,
    updateTransaction: Controller.Transaction.updateTransaction,
    deleteTransaction: Controller.Transaction.deleteTransaction,
    addUser: Controller.User.addUser,
    getUser: Controller.User.getUser,
    getUsers: Controller.User.getUsers
});

server.bindAsync('127.0.0.1:50051', grpc.ServerCredentials.createInsecure(), function() {
    console.log('Server bound successfully!');
    server.start();
    console.log('Server running at http://127.0.0.1:50051');
});
  

