import mongoose from "mongoose";
import validator from 'validator';

const Schema = mongoose.Schema;
const isEmail = validator.isEmail;

const UserSchema = new Schema({
    name: {
        type: String,
        max: 20
    },
    surname: {
        type: String,
        max: 20,
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: true,
        validate: [isEmail, 'Must be a email']
    },
    password: {
        type: String,
        required: true,
        min: 8
    },
    isAdmin: {
        type: Boolean,
        required: false,
    },
    created_at: {
        type: Date,
        default: Date.now,
    },
    updated_at: {
        type: Date,
        default: Date.now,
    },
    token: {
        type: String
    }

})

const User = mongoose.model('User', UserSchema);

export default User;


