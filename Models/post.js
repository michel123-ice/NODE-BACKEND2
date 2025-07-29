import mongoose from "mongoose";
const Schema = mongoose.Schema;

const postSchema = new Schema({
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
const Post = mongoose.model('Post', postSchema);

export default Post;