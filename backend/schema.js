const mongoose = require('mongoose')
const schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const auth = new schema(
    {
        name :{
            type: String,
            required: true
        },
        rollno :{
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        createAt : {
            type: Date,
            default: Date.now
        }
    }
)

auth.pre('save', async function(next){
    salt = await bcrypt.genSalt(10)
    console.log(salt)
    this.password = await bcrypt.hash(this.password,salt)
    next()
})

module.exports.auth = mongoose.model('auth', auth)