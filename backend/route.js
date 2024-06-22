const express = require('express');
const router = express.Router();
const control = require('./controller')

router.post('/sign_up', control.sign_up);
router.get('/sign_in/:email/:password', control.sign_in)

module.exports = router;