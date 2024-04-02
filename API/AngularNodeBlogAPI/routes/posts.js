var express = require('express');
var router = express.Router();
const post_controller = require("../controllers/postController");

router.get("/", post_controller.post_list);
router.get("/first", post_controller.post_list1);
router.post("/addPosts/:name/:post", post_controller.add_posts);

module.exports = router;
