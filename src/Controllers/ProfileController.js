import User from '../Models/User.js';
import bcrypt from 'bcrypt';

export const me = async (req, res) => {
    const userData = req.user;

    try {
        const user = await User.findById({ _id: userData.id });

        res.status(200).json({ data: { me: user } });
    }
    catch (err) {
        res.status(422).json({ error: err.message });
    }
}

export const edit = async (req, res) => {
    const userData = req.user;

    try {
        const user = await User.findByIdAndUpdate(userData.id, {
            username: req.body.username,
            email: req.body.email,
            name: req.body.name,
            surname: req.body.surname
        },
            { new: true }
        );

        res.status(200).json({ data: { user: user } });
    }
    catch (err) {
        res.status(422).json({ error: err.message });
    }
}

export const changePassword = async (req, res) => {
    const userData = req.user;

    if (!req.body.password) {
        res.status(422).json({ error: "Password field is required." });
    }

    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 2);

        const user = await User.findByIdAndUpdate(userData.id, {
            password: hashedPassword,
        },
            { new: true }
        );

        res.status(200).json({ data: { user: user } });
    }
    catch (err) {
        res.status(422).json({ error: err.message });
    }
}