import Post from '../Models/Post.js'

export const getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json(posts)
    }
    catch {
        res.status(422).json({ error: "Something went wrong." })
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
        console.log(req.user);

        const datas = req.body;

        const post = new Post(datas);

        const newPost = await post.save();

        res.status(201).json(newPost);
    } catch {
        res.status(422).json({ error: "Something went wrong." })
    }
}

export const updatePost = async (req, res) => {
    try {
        const post = Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).json(post);
    }
    catch {
        res.status(422).json({ error: "Something went wrong." })
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