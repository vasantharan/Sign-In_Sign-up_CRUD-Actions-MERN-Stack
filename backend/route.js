const express = require('express');
const router = express.Router();
const control = require('./controller');
const { authenticate } = require('./middleware/auth');

router.post('/sign_up', control.sign_up);
router.post('/sign_in', control.sign_in);
router.get('/user/data', authenticate, control.getUserData); // Added route for getting user data
router.post('/signout', authenticate, control.signOut); // Added route for signing out

module.exports = router;
