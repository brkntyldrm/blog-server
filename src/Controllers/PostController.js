import Post from '../Models/Post.js'

import { handleErrorMessage } from '../Helpers/helpers.js';

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find().populate('user');

        res.status(200).json({ posts: posts })
    }
    catch (err) {
        res.status(422).json({ error: err.message })
    }
}

export const getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json(post);
    }
    catch {
        res.status(422).json({ error: "Something went wrong." })
    }
}

export const storePost = async (req, res) => {
    try {
        const user = req.user;

        req.body.user = user.id;

        const post = await Post.create(req.body);

        res.status(201).json({ data: { post: post } });
    } catch (err) {
        res.status(422).json({ error: handleErrorMessage(err.message) })
    }
}

export const updatePost = async (req, res) => {
    try {
        const post = Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json(post);
    }
    catch (err) {
        res.status(422).json({ error: handleErrorMessage(err.message) })
    }
}

export const deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);

        res.status(200).json({ message: "Post successfully deleted." });
    }
    catch {
        res.status(422).json({ error: "Something went wrong." })
    }
}