const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    name: {
      type     : String,
      required : [true, "Please Add a Name"],
    },
    email: {
        type     : String,
        required : [true, "Please Add a Email"],
        unique   : true,
      },
    password: {
      type     : String,
      required : [true, "Please Add a Password"],
      unique   : true,
    },
    mobile: String,
    address: String,
    status: {
        type     : Number,
        required : true,
        default: 1,
      },
    mobile: String,
    created:{
        type: Date,
        default: Date.now,
    },
    updated:{
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Users", userSchema);