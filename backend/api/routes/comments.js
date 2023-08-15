const router = require("express").Router();
const {
    getComments,
    addComment,
    deleteComment,
} = require("../controllers/comments.js");
const requireAuth = require("../middleware/requireAuth.js");

router.use(requireAuth);

router.get("/", getComments);
router.post("/", addComment);
router.delete("/:id", deleteComment);

module.exports = router;
