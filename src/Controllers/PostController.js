import Post from '../Models/Post.js'

export const getPosts = async (req, res) => {
    const posts = await Post.find();

    res.status(200).json(posts)
}

export const getPost = async (req, res) => {
    const post = await Post.find(req.params.id);

    res.status(200).json(post);
}

export const storePost = async (req, res) => {
    const datas = req.body;

    const post = new Post(datas);

    const newPost = await post.save();

    res.status(201).json(newPost);
}

export const updatePost = async (req, res) => {
    const post = Post.findByIdAndUpdate(req.params.id, req.body, { new: true });

    res.status(200).json(post);
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