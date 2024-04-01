var express = require('express');
var router = express.Router();
const post_controller = require("../controllers/postController");

router.get("/", post_controller.post_list);

// router.get('/', function(req, res, next) {
//   res.send("placeholder");
// });

module.exports = router;
