const mongoose= require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:30
    },
    lastname:{
        type:String,
        required:true,
        trim:true,
        min:3,
        max:30
    },
    username:{
        type:String,
        required:true,
        trim:true,
        unique:true,
        index:true,
        min:3,
        max:30
    },
    email:{
        type:String,
        required:true,
        trim:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6
    },
    role:{
        type:String,
        enum:["user","admin"],
        default:'user'
    },
    contactNumber:{
        type:String
    },
    profilePicture:{
        type:String
    }
} , {timestamps:true});


// Hassing the Password


userSchema.pre("save" , async function(next) {
    if(this.isModified('password')){
        this.password = await bcrypt.hash(this.password , 12);
    }
    next();
});

// userSchema.methods = {
//     authinticate : function(password){
//         return bcrypt.compareSync(password , this.password)
//     }
// }

const AllUser = new mongoose.model("User" , userSchema);
module.exports = AllUser;