const router = require("express").Router();
const { getLikes, addLike, deleteLike } = require("../controllers/likes.js");
const requireAuth = require("../middleware/requireAuth.js");

router.use(requireAuth);

router.get("/", getLikes);
router.post("/", addLike);
router.delete("/", deleteLike);

module.exports = router;
