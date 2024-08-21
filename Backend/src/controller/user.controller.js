const User = require("../features/models/user.model")
const bcrypt = require("bcrypt");
const genrateToken=require("../config/generateToken");

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            res.send({ msg: "Please Enter all the fields" });
            return;
        }
        const user = await User.findOne({ email });
        console.log(user)

        if (user) {
            const hashed_password = user.password;
            bcrypt.compare(password, hashed_password, async (err, result) => {
                if (result) {
                    res.send({
                        msg: "login successfully",
                        data: {
                            userId: user._id,
                            name: user.firstName+" "+user.lastName,
                            email: user.email,
                            token: genrateToken(user._id),
                        },
                    });
                } else {
                    res.send({ msg: "Incorrect Password" });
                }
            });
        } else {
            res.send({ msg: "Email not registred" });
        }
    }
    catch (err) {
        res.send(err)
    }
}
const signup = async (req, res) => {
    try {
        const { firstName, lastName, email, password } = req.body;

        if (!firstName || !lastName || !email || !password) {
            return res.send({ msg: "Please Enter all the fields" });
        }
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.send({ msg: "User already exist" });
        }
        bcrypt.hash(password, 4, async (err, hash) => {
            const user = new User({
                ...req.body,
                password: hash,
            });
            await user.save();
            res.status(201).send({ user, msg: "Register sucessfully" });
        });
    }
    catch (err) {
        res.send(err)
    }
}

module.exports = { signup, login }