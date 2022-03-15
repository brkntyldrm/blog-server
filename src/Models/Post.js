import mongoose from "mongoose";

const Schema = mongoose.Schema;

const PostSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    title: {
        type: String,
        required: [true, 'title column is required'],
    },
    content: {
        type: String,
        required: [true, "content column is required"],
        min: 20,
    }
});

const Post = mongoose.model('Post', PostSchema);

export default Post;