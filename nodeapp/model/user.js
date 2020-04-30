const mongoose = require('mongoose');
const user = new mongoose.Schema({
    userName:{type:String, unique:true},
    password:{type:String},
    firstName:{type:String},
    lastName:{type:String}
});
var User = mongoose.model('user',user);
module.exports = User;