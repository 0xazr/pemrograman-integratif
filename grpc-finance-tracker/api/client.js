const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('../financetracker.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});

const financeTrackerServicePackageDefinition = grpc.loadPackageDefinition(packageDefinition).transaction;

const client = new financeTrackerServicePackageDefinition.FinanceTrackerService(
    "127.0.0.1:50051",
    grpc.credentials.createInsecure()
)

module.exports = client;