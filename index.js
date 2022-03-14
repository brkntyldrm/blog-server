import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import "dotenv/config";
import mongoose from "mongoose";
import post from './src/Apis/postApi.js';
import user from './src/Apis/registerLoginApi.js';

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/auth', user)
app.use('/api/v1/posts', post);



mongoose.connect(process.env.DB_URL)
    .then(console.log('Database connected'))
    .then(app.listen(process.env.PORT, () => console.log(`App listening port ${process.env.PORT}`)))
    .catch(err => console.log(err));