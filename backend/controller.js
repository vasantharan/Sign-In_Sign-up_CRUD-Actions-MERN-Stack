const {auth} = require('./schema');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const doenv = require('dotenv')

doenv.config({
    path: './.env'
})

module.exports.sign_up = async(req,res) => {
    console.log(req.body);
    const u = new auth(req.body);
    await u.save();
    console.log(u);
    res.send(u);
}

module.exports.sign_in = async(req,res) => {
    console.log(req.params);
    const account = await auth.findOne({email: req.params.email})
    if(account){
        console.log(account.password)
        console.log(req.params.password)
        if(await bcrypt.compare(req.params.password, account.password)) {
            const token = jwt.sign({email: account.email},process.env.jwt_secret, {expiresIn: process.env.jwt_expiry})
            const cookie_op = {
                expires : new Date(
                    Date.now() + process.env.jwt_cookie_expiry * 24 * 60 * 60 * 1000
                ),
            }
            console.log(cookie_op)
            res.cookie("signed_in",token,cookie_op)
            res.send('Signed_in')
        }
        else{
            res.send('Wrong Password');
        }
    }    
    else {
        res.send("Account Doesn't Exists");
    }
}