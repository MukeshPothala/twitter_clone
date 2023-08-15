const router = require("express").Router();
const {
    getPosts,
    addPost,
    deletePost,
    getAllPosts,
} = require("../controllers/posts.js");
const requireAuth = require("../middleware/requireAuth.js");
router.use(requireAuth);

router.get("/", getAllPosts);
router.post("/", addPost);
router.delete("/:id", deletePost);

module.exports = router;
