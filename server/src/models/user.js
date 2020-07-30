const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Course');
const Schema = mongoose.Schema;
const userSchema = new Schema({
    userName: String,
    email: String,
    address: String,
    phone: Number

});
var Userdata = mongoose.model('user',userSchema);
module.exports = Userdata;