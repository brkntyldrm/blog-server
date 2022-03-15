import User from '../Models/User.js';

export const getUsers = async (req, res) => {
    try {
        const users = await User.find()

        res.status(200).json({
            data: { users: users }
        })
    }
    catch {
        res.status(422).json({ error: "Something went wrong." })
    }
}

export const getUser = async (req, res) => {
    try {
        const user = await User.find(req.params.id)

        res.status(200).json({
            data: { users: user }
        })
    }
    catch {
        res.status(422).json({ error: "Something went wrong." })
    }
}