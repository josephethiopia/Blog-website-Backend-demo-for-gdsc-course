import mongoose, { trusted } from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },

    email:{
        type: String,
        required: true,
        unique: true,
    },
    
    password:{
        type: String,
        required: true,
        minlength: 8
    },

    blogs:{
        type: [{type: mongoose.Types.ObjectId, ref:"Blog", required: true}]
    }
});

export default mongoose.model("User", userSchema);
