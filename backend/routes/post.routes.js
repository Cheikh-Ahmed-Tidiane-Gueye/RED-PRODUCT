// post.routes.js
const express = require("express");
const { setPosts, getPosts, editPosts, deletePosts } = require("../controllers/post.controller");
const router = express.Router();


// Create
router.get("/", getPosts);

// Read
router.post("/", setPosts);

// Update
router.put("/:id", editPosts);

// Delete
router.delete("/:id", deletePosts);

router.patch("/like-post/:id", (req, res) => {
  res.json({ message: "Post liké : id : " + req.params.id });
});

router.patch("/dislike-post/:id", (req, res) => {
  res.json({ message: "Post disliké : id : " + req.params.id });
});

module.exports = router;
