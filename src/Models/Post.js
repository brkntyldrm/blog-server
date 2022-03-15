import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        min: 20,
    }
});

const Post = mongoose.model('Post', PostSchema);

export default Post;