import User from '../../Models/User.js';
import bcrtyp from 'bcrypt';
import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const register = async (req, res) => {
    const { password: plainPassword } = req.body;

    const password = await bcrtyp.hash(plainPassword, 2);

    req.body.password = password;

    const user = await User.create(req.body)
        .catch(err => console.log(err.message));

    const token = jwt.sign({
        id: user._id,
    },
        process.env.JWT_SECRET,
        {
            expiresIn: '2h'
        }
    );

    user.token = token;

    res.json({ status: 200, data: { user: user } });
}

export const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });

    if (!user) {
        return res.json({
            status: 422, data: { error: "Given credential is wrong" }
        });
    }

    if (await bcrtyp.compare(password, user.password)) {
        const token = jwt.sign({
            id: user._id,
        },
            process.env.JWT_SECRET,
            {
                expiresIn: '2h'
            }
        );

        user.token = token;
        await user.save();

        return res.json({ status: 200, data: { user: user } });
    }

    res.json({
        status: 422, data: { error: "Given credential is wrong" }
    });
}
