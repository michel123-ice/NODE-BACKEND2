import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    fullname: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true 
    },
    password: {
        type: String,
        require: true
    }
} ,{timestamps: true});
const user = mongoose.model('user', userSchema);

export default user;
