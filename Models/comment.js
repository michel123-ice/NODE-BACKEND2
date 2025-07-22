import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const comSchema = Schema({
    comment: {
        type: String,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'User'
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        require: true,
        ref: 'Post'
    }

}, { timestamps: true });
const Comment = mongoose.model("comment", comSchema);

export default Comment;