const Transaction = require('../models/transaction');
const User = require('../models/user');


const addTransaction = (data) => new Promise((async(resolve, reject) => {
    try {
        const transaction = new Transaction(data);
        const newTransaction = await transaction.save();
        
        if (!newTransaction) {
            resolve('0');
        }
        resolve('1');
    } catch (e) {
        reject(e);
    }
}));


const getTransactions = (key = '') => new Promise((async(resolve, reject) => {
    try {
        const data = await Transaction.find({ user_id: key }).sort({ _id: 'asc' }).exec();
        
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));

const getTransaction = (key = '') => new Promise((async(resolve, reject) => {
    try {
        const data = await Transaction.findOne({ _id: key }).exec();

        if (!data) {
            resolve('0');
        }
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));

const deleteTransaction = (key = '') => new Promise((async(resolve, reject) => {
    try {
        const data = await Transaction.findOneAndDelete({ _id: key }).exec();

        if (!data) {
            resolve('0');
        }
        resolve('1');
    } catch (e) {
        reject(e);
    }
}));


const updateTransaction = (key = '', arg) => new Promise((async(resolve, reject) => {
    try {
        const data = await Transaction.findOneAndUpdate({ _id: key }, arg, { new: true }).exec();
        
        if (!data) {
            resolve('0');
        }
        resolve('1');
    } catch (e) {
        resolve('0');
    }
}));

const getUser = (arg) => new Promise((async(resolve, reject) => {
    try {
        // Verify if the user exists, then check if the password is correct
        const data = await User.findOne({ email: arg.email }).exec();

        if (!data) {
            reject(new Error('User not found'));
        } else if (data.password !== arg.password) {
            reject(new Error('Incorrect password'));
        }

        resolve(data);
    } catch (e) {
        reject(e);
    }
}));

const getUsers = () => new Promise((async(resolve, reject) => {
    try {
        const data = await User.find().sort({ id: 'asc' }).exec();
        resolve(data);
    } catch (e) {
        reject(e);
    }
}));

const saveUser = (arg) => new Promise((async(resolve, reject) => {
    try {
        const user = new User(arg);
        const newUser = await user.save();
        resolve(newUser);
    } catch (e) {
        reject(e);
    }
}));


module.exports = {
    addTransaction,
    getTransactions,
    getTransaction,
    deleteTransaction,
    updateTransaction,
    getUser,
    getUsers,
    saveUser
};
