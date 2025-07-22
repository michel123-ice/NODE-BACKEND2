import mongoose from "mongoose";
const Schema = mongoose.Schema;

const userSchema = new Schema({
    tittle: {
        type: String,
        require: true
    },
    snippet: {
        type: String,
        require: true 
    },
    content: {
        type: String,
        require: true
    }
} ,{timestamps: true});
const user = mongoose.model('user', userSchema);

export default user;
