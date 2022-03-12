import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: String,
    content: String,
    excerpt: String,
    slug: String
});

const Post = mongoose.model('Post', PostSchema);

export default Post;