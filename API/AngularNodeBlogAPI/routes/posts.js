var express = require('express');
var router = express.Router();
const post_controller = require("../controllers/postController");

router.get("/", post_controller.post_list);
router.post("/addPosts/:name/:post", post_controller.add_posts);
router.post("/updatePost/:post/:id", post_controller.update_post);
router.delete("/removePost/:id", post_controller.remove_posts);

module.exports = router;