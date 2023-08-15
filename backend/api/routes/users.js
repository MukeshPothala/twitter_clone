const requireAuth = require("../middleware/requireAuth.js");

const router = require("express").Router();
const { getUser, updateUser } = require("../controllers/user.js");

router.use(requireAuth);

router.get("/find/:userId", getUser);
router.put("/", updateUser);

module.exports = router;
