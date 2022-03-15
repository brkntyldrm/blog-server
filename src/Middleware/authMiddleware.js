import jwt from 'jsonwebtoken';
import User from '../Models/User.js';
import 'dotenv/config';

const verifyToken = async (req, res, next) => {
    const authorization = req.headers.authorization;
    const token = authorization.split(' ')[1];

    if (!token) {
        res.json({ status: 401, data: { error: "You are not authorized" } });
    }

    try {
        const user = await jwt.verify(token, process.env.JWT_SECRET)

        req.user = user;
    } catch (error) {
        res.json({ status: 401, data: { error: "You are not authorized" } });
    }

    next();
}

export default verifyToken;

