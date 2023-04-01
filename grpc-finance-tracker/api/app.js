const express = require('express');
const client = require('./client');
const cookieParser = require('cookie-parser');
const middleware = require('./middleware');
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('./secret');

const app = express();

app.use(express.json());
app.use(cookieParser());

app.get('/api/users', (req, res) => {
    try {
        client.getUsers({}, (err, data) => {
            if(err) return res.status(500).send({
                message: 'Error retrieving users'
            });
            return res.status(200).send({
                message: 'Users retrieved successfully',
                data
            });
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

app.post('/api/login', (req, res) => {
    try {
        client.getUser({
            email: req.body.email,
            password: req.body.password
        }, (err, data) => {
            if(err) return res.status(500).send({
                message: 'Error logging in'
            });

            const token = jwt.sign({ _id: data._id }, SECRET_KEY);
            return res
                .cookie("access_token", token, {
                    httpOnly: true
                })
                .status(200)
                .send({ message: "Success loggin in" });
        })
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

app.get('/api/logout', middleware.verifyJWT, (req, res) => {
    try {
        res
            .clearCookie('access_token')
            .status(200)
            .send({ message: 'Success logging out' });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

app.get('/api/transactions', middleware.verifyJWT, (req, res) => {
    try {
        client.getTransactions({
            user_id: req.user._id
        }, (err, data) => {
            if(err) res.status(500).send({
                message: 'Error retrieving transactions'
            });
            res.status(200).send({
                message: 'Transactions retrieved successfully',
                data
            });
        });
    } catch (error) {
        res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

app.put('/api/transaction', middleware.verifyJWT, (req, res) => {
    try {
        client.addTransaction({
            user_id: req.user._id,
            amount: req.body.amount,
            category: req.body.category,
            description: req.body.description,
            date: new Date()
        }, (err, data) => {
            if(err) return res.status(500).send({
                message: 'Error adding transaction'
            });
            return res.status(200).send({
                message: 'Transaction added successfully',
                data
            });
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

app.patch('/api/transaction', middleware.verifyJWT, (req, res) => {
    try {
        client.getTransaction({
            id: req.body.id
        }, (err, data) => {
            if (err) {
                return res.status(500).send({
                    message: 'Error retrieving transaction'
                });
            }

            if (data.user_id !== req.user._id) {
                return res.status(401).send({
                    message: 'Unauthorized'
                });
            }

            client.updateTransaction(req.body, (err, data) => {
                if (err) {
                    return res.status(500).send({
                        message: 'Error updating transaction'
                    });
                }

                return res.status(200).send({
                    message: 'Transaction updated successfully',
                    data
                });
            });
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

app.delete('/api/transaction', middleware.verifyJWT, (req, res) => {
    try {
        client.getTransaction({
            id: req.body.id
        }, (err, data) => {
            if (err) {
                return res.status(500).send({
                    message: 'Error retrieving transaction'
                });
            }

            if (data.user_id !== req.user._id) {
                return res.status(401).send({
                    message: 'Unauthorized'
                });
            }

            client.deleteTransaction({
                id: req.body.id
            }, (err, data) => {
                if (err) {
                    return res.status(500).send({
                        message: 'Error deleting transaction'
                    });
                }

                return res.status(200).send({
                    message: 'Transaction deleted successfully',
                    data
                });
            });
        });
    } catch (error) {
        return res.status(500).send({
            message: 'Internal Server Error'
        });
    }
});

            


app.listen(3000, () => console.log('Server running on port 3000'));