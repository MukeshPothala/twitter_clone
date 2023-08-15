const express = require("express");
const authRoutes = require("./api/auth/auth");
const postRoutes = require("./api/routes/posts");
const commentRoutes = require("./api/routes/comments");
const relationshipRoutes = require("./api/routes/relationships");
const likeRoutes = require("./api/routes/likes");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/auth", authRoutes);
// app.use("/api/users", userRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/likes", likeRoutes);
app.use("/api/relationships", relationshipRoutes);

app.listen(4000, () => {
    console.log("connection is established");
});
