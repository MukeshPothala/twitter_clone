const jwt = require("jsonwebtoken");
const db = require("../../connect");

const requireAuth = (req, res, next) => {
    //verify authentication
    const { authorization } = req.headers;
    if (!authorization) {
        return res.status(401).json("authorized token is required");
    }
    const token = authorization.split(" ")[1];

    try {
        const { id } = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const stmt = "select * from users where id = ?";
        db.query(stmt, [id], (error, data) => {
            if (error) {
                console.log(error.message);
            } else {
                req.user = data[0];
                next();
            }
        });
    } catch (err) {
        console.log(err);
        res.status(403).json({ message: "Token is not valid!" });
    }
};
module.exports = requireAuth;
