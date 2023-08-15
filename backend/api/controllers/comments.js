const db = require("../../connect");
const moment = require("moment");

const getComments = (req, res) => {
    console.log(req.query.postid);
    const q = `SELECT c.*, u.id AS userId, username, profilePhoto FROM comments AS c JOIN users AS u ON (u.id = c.userid)
    WHERE c.postid = ? ORDER BY c.created_at DESC
    `;
    db.query(q, [req.query.postid], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json(data);
    });
};

const addComment = (req, res) => {
    const q =
        "INSERT INTO comments(`desc`, `created_at`, `userid`, `postid`) VALUES (?)";
    const values = [
        req.body.desc,
        moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
        req.user.id,
        req.body.postid,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Comment has been created.");
    });
};

const deleteComment = (req, res) => {
    const commentId = req.params.id;
    const q = "DELETE FROM comments WHERE `id` = ? AND `userid` = ?";
    db.query(q, [commentId, req.user.id], (err, data) => {
        if (err) return res.status(500).json(err);
        if (data.affectedRows > 0) return res.json("Comment has been deleted!");
        return res.status(403).json("You can delete only your comment!");
    });
};

module.exports = { addComment, deleteComment, getComments };
