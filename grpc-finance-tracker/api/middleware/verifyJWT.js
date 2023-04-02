const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../secret');

const verifyJWT = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).send({
            message: 'Access Denied'
        });
    }

    const token = req.header('Authorization').replace('Bearer ', '');
    
    if(!token) return res.status(401).send({
        message: 'Access Denied'
    });
    try {
        const verified = jwt.verify(token, SECRET_KEY);
        
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send({
            message: 'Invalid Token'
        });
    }
}

module.exports = verifyJWT;