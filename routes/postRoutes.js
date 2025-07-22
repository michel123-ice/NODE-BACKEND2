import e from "express";
import { createPost, del1Post, get1post, getAllPosts, update1Post } from "../controllers/postController.js";
import authorize from "../middlewares/authorize.js";
import upload from "../middlewares/multer.js";
const router = e.Router();

router.post("/", authorize(["Admin","User"]),upload.single('image'), createPost);

router.get("/", getAllPosts);
router.get("/:id", get1post);
router.delete("/:id",authorize(["Admin"]), del1Post);
router.put("/:id", update1Post);

export default router