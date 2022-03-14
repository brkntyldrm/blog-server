import jwt from 'jsonwebtoken';
import 'dotenv/config';

const verifyToken = (req, res, next) => {
    const token = req.headers['x-access-token'];

    if (!token) {
        res.json({ status: 401, data: { error: "You are not authorized" } });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        req.user = decoded;
    } catch (error) {
        res.json({ status: 401, data: { error: "You are not authorized" } });
    }

    next();
}

export default verifyToken;

