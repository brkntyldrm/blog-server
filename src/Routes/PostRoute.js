import { Router } from "express";
import { getPosts, getPost, storePost, updatePost, deletePost } from "../Controllers/PostController.js";
import auth from '../Middleware/authMiddleware.js'

const router = Router();

router.use(auth);

router.get('/', getPosts);
router.get('/:id', getPost);
router.post('/', storePost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;