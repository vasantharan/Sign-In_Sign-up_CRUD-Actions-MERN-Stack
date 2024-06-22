const mongoose = require('mongoose')
const schema = mongoose.Schema;

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

module.exports.auth = mongoose.model('auth', auth)