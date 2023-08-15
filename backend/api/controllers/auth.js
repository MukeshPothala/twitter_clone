const db = require("../../connect");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const generateToken = (data) => {
    return jwt.sign(data, process.env.JWT_SECRET_KEY, { expiresIn: "1d" });
};

const register = (req, res) => {
    //CHECK USER IF EXISTS

    let q = "SELECT * FROM socialMedia.users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length) return res.status(409).json("User already exists!");
        //CREATE A NEW USER
        //Hash the password
        const salt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users (`username`,`email`,`password`) VALUE (?)";

        const values = [req.body.username, req.body.email, hashedPassword];

        db.query(q, [values], (err, data) => {
            if (err) return res.status(500).json(err);
            let stmt = "select * from users where email = ? and username = ?";
            db.query(
                stmt,
                [req.body.email, req.body.username],
                (error, data) => {
                    let token = generateToken({
                        id: data[0].id,
                    });
                    const { id, username, email, profilePhoto, ...others } =
                        data[0];
                    return res.status(200).json({
                        token: token,
                        id: id,
                        username: username,
                        email: email,
                        profile_photo: profilePhoto,
                    });
                }
            );
        });
    });
};

const login = (req, res) => {
    const q = "SELECT * FROM users WHERE username = ?";

    db.query(q, [req.body.username], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.length === 0) return res.status(404).json("User not found!");

        const checkPassword = bcrypt.compareSync(
            req.body.password,
            data[0].password
        );

        if (!checkPassword)
            return res.status(400).json("Wrong password or username!");

        let token = generateToken({
            id: data[0].id,
        });
        const { id, username, email, profilePhoto, ...others } = data[0];
        return res.status(200).json({
            token: token,
            id: id,
            username: username,
            email: email,
            profile_photo: profilePhoto,
        });
    });
};

module.exports = { login, register };
