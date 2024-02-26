const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    
    username:{
        type:String,
        require:true,
        min:[3,'Must Be atleast 3 Characters but get {VALUE}']
    },
    email:{
        type:String,
        require:true,
        unique:true,
        
        validator(value){
            if(validator.isEmail(value))
            {throw new Error('Invalid Email')}
        }
    },
    password:{
        type:String,
        require:true
    },
    profile:{   
        type:String,
    }
})

const users = mongoose.model("users",userSchema)

module.exports = users