const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
});

const authenticate = (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization.split(' ')[1]; 
    if (!token) {
        return res.status(401).send('Access denied. No token provided.');
    }

    try {
        const decoded = jwt.verify(token, process.env.jwt_secret);
        req.user = decoded; 
        next();
    } catch (error) {
        res.status(400).send('Invalid token.');
    }
};

module.exports = { authenticate };
