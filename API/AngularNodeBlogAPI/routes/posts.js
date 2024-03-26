var express = require('express');
var router = express.Router();

/* GET posts listing. */
router.get('/', function(req, res, next) {
  res.send({
    id: 1,
    name: "Name",
    post: "Post"
  });
});

module.exports = router;
