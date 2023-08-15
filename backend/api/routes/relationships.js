const router = require("express").Router();
const {
    getRelationships,
    addRelationship,
    deleteRelationship,
} = require("../controllers/relationships.js");
const requireAuth = require("../middleware/requireAuth.js");

router.use(requireAuth);

router.get("/", getRelationships);
router.post("/", addRelationship);
router.delete("/", deleteRelationship);

module.exports = router;
