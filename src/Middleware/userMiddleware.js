import jwt from 'jsonwebtoken';
import User from '../Models/User.js';


const addUserToRequest = async (req, res, next) => {
    const token = req.headers['x-access-token'];

    const decode = jwt.decode(token);

    const { username: username } = decode;

    try {
        const user = await User.findOne({ username: username });

        req.user = user;
    }
    catch {
        res.status(422).json({ error: "Something went wrong." });
    }

    next();
}

export default addUserToRequest;