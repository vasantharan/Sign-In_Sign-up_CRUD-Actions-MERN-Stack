const {auth} = require('./schema');
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
        console.log(account.password === req.params.password)
        if(account.password==req.params.password){
            res.send('Signed_in');
        }
        else{
            res.send('Wrong Password');
        }
    }    
    else {
        res.send("Account Doesn't Exists");
    }
}