const db = require("../../connect");
const moment = require("moment");

const getRelationships = (req, res) => {
    const q =
        "SELECT followerUserID FROM relationships WHERE followingUserID = ?";

    db.query(q, [req.query.followingUserID], (err, data) => {
        if (err) return res.status(500).json(err);
        return res
            .status(200)
            .json(data.map((relationship) => relationship.followerUserID));
    });
};

const addRelationship = (req, res) => {
    const q =
        "INSERT INTO relationships (`followerUserID`,`followingUserID`) VALUES (?)";
    const values = [req.user.id, req.body.userid];

    db.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Following");
    });
};

const deleteRelationship = (req, res) => {
    const q =
        "DELETE FROM relationships WHERE `followerUserID` = ? AND `followingUserID` = ?";
    db.query(q, [req.user.id, req.query.useId], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("Unfollow");
    });
};

module.exports = { getRelationships, addRelationship, deleteRelationship };
