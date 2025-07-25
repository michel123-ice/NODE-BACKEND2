import Comment from "../model/comment.js";
import Post from "../modelspost.js";

const createComment = async (req, res) => {
  let { comment } = req.body;
  let { postId } = req.params;

  const newCom = await Comment.create({
    comment,
    post: postId, 
    author: req.user.id
  }); 
  
  res.status(200).json({ message: "comment created successfully" });
};

const getAllComments = async (req, res) => {
  const myComments = await Comment.find();

  if (!myComments) {
    return res.status(404).json({ message: "No comments  found" });
  }

  res.status(200).json(myComments);
};

const get1comment = async (req, res) => {
  let { id } = req.params;
  const oneComment = await User.findById(id);

  if (!oneComment) return res.status(404).json({ message: "Comment not found" });

  res.status(200).send(oneComment);
};

const del1Comment = async (req, res) => {
  let { id } = req.params;
  const deletedComment = await Comment.findByIdAndDelete(id);
  if (!deletedComment)
    return res.status(404).json({ message: "Comment not found" });

  res.status(200).json({ message: "Comment deleted successfully" });
};

const update1Comment = async (req, res) => {
  let { id } = req.params;

  let newData = req.body;

  let updatedComment = await Comment.findByIdAndUpdate(id, newData, { new: true });
  if (!updatedComment) return res.status(404).json({ message: "Comment not found" });
  res.status(200).json({ message: "Comment updated successfully" });
};

export { getAllComments, get1comment, del1Comment, update1Comment, createComment };