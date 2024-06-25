const { auth } = require('./schema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({
    path: './.env'
});

module.exports.sign_up = async (req, res) => {

    try {
        const existingAccount = await auth.findOne({ email: req.body.email });
        if (existingAccount) {
            return res.send('Account already exists');
        }

        const u = new auth(req.body);
        await u.save();
        res.status(201).send('Sign up successful');
    } catch (error) {
        console.error('Error during sign-up:', error);
        res.send('Internal Server Error');
    }
};

module.exports.sign_in = async (req, res) => {
    try {
        const { email, password } = req.body;

        const account = await auth.findOne({ email });
        if (!account) {
            return res.send("Account doesn't exist");
        }

        const isPasswordValid = await bcrypt.compare(password, account.password);
        if (!isPasswordValid) {
            return res.send('Wrong Password');
        }

        const token = jwt.sign({ email: account.email }, process.env.jwt_secret, {
            expiresIn: process.env.jwt_expiry,
        });

        const cookieOptions = {
            expires: new Date(Date.now() + process.env.jwt_cookie_expiry * 24 * 60 * 60 * 1000),
        };

        res.cookie('token', token, cookieOptions); 
        res.status(200).send({ message: 'Signed in', token });
    } catch (error) {
        console.error('Error signing in:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.getUserData = async (req, res) => {
    try {
        const user = await auth.findOne({ email: req.user.email }); 
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.status(200).json({
            name: user.name,
            email: user.email,
            rollno: user.rollno,
            createAt: user.createAt
        });
    } catch (error) {
        console.error('Error fetching user data:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.signOut = (req, res) => {
    res.cookie('token', '', { expires: new Date(0), httpOnly: true }); // Clear the token cookie
    res.status(200).send('Signed out');
};
