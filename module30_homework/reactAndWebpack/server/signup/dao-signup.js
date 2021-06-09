const mongoose = require('mongoose');
var User = require('../user_model.js');

const url = 'mongodb+srv://dbUser:temp123@cluster0.3akyl.mongodb.net/SF-Drive';
module.exports.signupDao = async function(data){
    const db = await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(async ()=>{
            const newUser = await new User(data);
            const status = await newUser.save();
            if(status){
                return 200;
            }else{
                mongoose.connection.close()
                return 400;
            }
        })
        .catch((error)=> {
            mongoose.connection.close()
            return error.code;
        })
    return db
}