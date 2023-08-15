const db = require("../../connect");

const getLikes = (req, res) => {
    console.log("call is made");
    const q = "SELECT userid FROM likes WHERE postid = ?";

    db.query(q, [req.query.postid], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data.map((like) => like.userid));
    });
};

const addLike = (req, res) => {
    const q = "INSERT INTO likes (`userid`,`postid`) VALUES (?)";
    const values = [req.user.id, req.body.postid];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been liked.");
    });
};

const deleteLike = (req, res) => {
    const q = "DELETE FROM likes WHERE `userid` = ? AND `postid` = ?";

    db.query(q, [req.user.id, req.query.postid], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Post has been disliked.");
    });
};

module.exports = { getLikes, addLike, deleteLike };
