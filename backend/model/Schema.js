
  const mongoose = require('mongoose');
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});
const User = mongoose.model('User', userSchema);
module.exports = User;



// const mongoose=require("mongoose");

// const userSchema=mongoose.Schema({
//       name:String,
//       username:String,
//       email:String,
//       password:String,
// })
// const user=mongoose.model("user",userSchema);
// module.exports=user;