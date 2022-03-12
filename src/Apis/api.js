import { Router } from "express";
import { getPosts, getPost, storePost, updatePost } from "../Controllers/PostController.js";

const router = Router();

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', storePost);
router.put('/:id', updatePost);

export default router;