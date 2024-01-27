const { BSON } = require("mongodb");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        hash:{
            type:String,
            required:true
        },
        salt:{
            type:String,
            required:true
        }
    },
    creationDate:{
        type:Date,
        default:Date.now
    },
    profilePic:{
        type:Buffer,
    }
});

module.exports = mongoose.model("User",userSchema);