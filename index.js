import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import "dotenv/config";
import post from './src/Routes/PostRoute.js';
import auth from './src/Routes/AuthRoute.js';
import profile from './src/Routes/ProfileRoute.js';


const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/v1/auth', auth);
app.use('/api/v1/profile', profile);
app.use('/api/v1/posts', post);



mongoose.connect(process.env.DB_URL)
    .then(console.log('Database connected'))
    .then(app.listen(process.env.PORT, () => console.log(`App listening port ${process.env.PORT}`)))
    .catch(err => console.log(err));