const db = require("../../connect");
const { v2 } = require("cloudinary");
const moment = require("moment");

cloudinary = v2;

cloudinary.config({
    cloud_name: "dysc2wmj4",
    api_key: "624349134482147",
    api_secret: "b-TOg7nrAbzGBSaxaRs_bKiX1m4",
});
const getAllPosts = (req, res) => {
    const stmt = `SELECT p.*, u.id AS userId, username, profilePhoto FROM posts AS p JOIN users AS u ON (u.id = p.userid) ORDER BY p.created_at DESC`;
    db.query(stmt, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};
const getPosts = (req, res) => {
    const userId = req.user.id;
    const q =
        userId !== "undefined"
            ? `SELECT p.*, u.id AS userId, username, profilePhoto FROM posts AS p JOIN users AS u ON (u.id = p.userid) WHERE p.userid = ? ORDER BY p.created_at DESC`
            : `SELECT p.*, u.id AS userId, username, profilePhoto FROM posts AS p JOIN users AS u ON (u.id = p.userid)
    LEFT JOIN relationships AS r ON (p.userid = r.followedUserID) WHERE r.followerUserID= ? OR p.userid =?
    ORDER BY p.created_at DESC`;

    const values =
        userId !== "undefined" ? [userId] : [req.user.id, req.user.id];

    db.query(q, values, (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

const addPost = async (req, res) => {
    let setImg = null;
    const q =
        "INSERT INTO posts(`desc`, `img`, `created_at`, `userid`) VALUES (?)";
    if (req.body.img) {
        try {
            const uploadRes = await cloudinary.uploader.upload(req.body.img, {
                upload_preset: "tweets-img",
            });
            if (uploadRes) {
                setImg = uploadRes.secure_url;
            }
        } catch (err) {
            console.log(err);
        }
    }
    const values = [
        req.body.desc,
        setImg,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        req.user.id,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been created.");
    });
};
const deletePost = (req, res) => {
    const q = "DELETE FROM posts WHERE `id`=? AND `userId` = ?";
    db.query(q, [req.params.id, req.user.id], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.affectedRows > 0)
            return res.status(200).json("Post has been deleted.");
        return res.status(403).json("You can delete only your post");
    });
};

module.exports = { addPost, deletePost, getPosts, getAllPosts };
