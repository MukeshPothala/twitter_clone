const db = require("../../connect");
const { v2 } = require("cloudinary");

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getUser = (req, res) => {
    const userId = req.params.userId;
    const q = "SELECT * FROM users WHERE id=?";

    db.query(q, [userId], (err, data) => {
        if (err) return res.status(500).json(err);
        const { password, ...info } = data[0];
        return res.json(info);
    });
};

const updateUser = async (req, res) => {
    const setProfilePhoto = null;
    const setBgPhoto = null;
    if (req.body.profilePhoto) {
        const uploadRes = await cloudinary.uploader.upload(img, {
            upload_preset: "tweets-img",
        });
        if (uploadRes) {
            setProfilePhoto = uploadRes.secure_url;
        }
    }
    if (req.body.bgPhoto) {
        const uploadRes = await cloudinary.uploader.upload(img, {
            upload_preset: "tweets-img",
        });
        if (uploadRes) {
            setBgPhoto = uploadRes.secure_url;
        }
    }
    const q =
        "UPDATE users SET `gender`=?,`age`=?,`linkedINLink`=?,`phoneNumber`=?,`instaLink`=?,`gitLink`=?,`profilePhoto`=?,`bgPhoto`=? WHERE id=? ";

    db.query(
        q,
        [
            req.body.gender,
            req.body.age,
            req.body.linkedINLink,
            req.body.phoneNumber,
            req.body.instaLink,
            req.body.gitLink,
            setProfilePhoto,
            setBgPhoto,
            userInfo.id,
        ],
        (err, data) => {
            if (err) res.status(500).json(err);
            if (data.affectedRows > 0) return res.json("Updated!");
            return res.status(403).json("You can update only your post!");
        }
    );
};

module.exports = { getUser, updateUser };
