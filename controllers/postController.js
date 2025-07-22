import post from '../Models/post.js';
import bcrypt from 'bcryptjs'; 

const createPost = async (req, res) => {
  try {
    let { title, snippet, content } = req.body;
    
    if (!title || !snippet || !content) {
      res.status(400).json({message: "All fields are required"})
    } 

     const image = {
       url: req.file?.path,
       filename: req.file?.filename,
     };

     const newPost = await Post.create({
       title,
       snippet,
       content,
       image,
       author: req.user.id,
     });
     res.status(201).json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error!" })
    console.log(error)
    
  }
 
};
const getAllPosts = async (req, res) => {
  const myPosts = await Post.find().populate({
    path: "author",
    select:"firstname lastname"
  })

  if (!myPosts) {
    return res.status(404).json({ message: "No posts  found" });
  }

  res.status(200).json(myPosts);
};

const get1post = async (req, res) => {
  let { id } = req.params;
  const onePost = await Post.findById(id).populate({
    path: "author",
    select:"firstname lastname"
  })

  if (!onePost) return res.status(404).json({ message: "Post not found" });

  res.status(200).send(onePost);
};

const del1Post = async (req, res) => {
let { id } = req.params;
  const deletedPost = await post.findByIdAndDelete(id);
  if (!deletedPost) return res.status(404).json({ message: "Post not found" });

  res.status(200).json({ message: "Post deleted successfully" });
};

const update1Post = async (req, res) => {
  let { id } = req.params;

  let newData = req.body;

  let updatedPost = await Post.findByIdAndUpdate(id, newData, { new: true });
  if (!updatedPost) return res.status(404).json({ message: "Post not found" });
  res.status(200).json({ message: "Post updated successfully" });
}; 

export { getAllPosts, get1post, del1Post, update1Post, createPost };