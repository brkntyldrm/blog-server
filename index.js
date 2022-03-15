import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import "dotenv/config";
import mongoose from "mongoose";
import post from './src/Apis/postApi.js';
import auth from './src/Apis/registerLoginApi.js';
import user from './src/Apis/UserApi.js';


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/auth', auth)
app.use('/api/v1/posts', post);
app.use('/api/v1/users', user)



mongoose.connect(process.env.DB_URL)
    .then(console.log('Database connected'))
    .then(app.listen(process.env.PORT, () => console.log(`App listening port ${process.env.PORT}`)))
    .catch(err => console.log(err));