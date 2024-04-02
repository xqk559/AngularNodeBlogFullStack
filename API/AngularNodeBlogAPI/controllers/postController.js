var con = require('../db.js');
const asyncHandler = require("express-async-handler");

exports.post_list = asyncHandler(async (req, res, next) => {
  sql = "SELECT * FROM posts";
  console.log(sql);
  con.query(sql, function (err, response) {
    if (err) throw err;
    res.send(JSON.stringify(response));
  });
});

exports.post_list1 = asyncHandler(async (req, res, next) => {
  sql = "SELECT * FROM posts WHERE id = 1";
  console.log(sql);
  con.query(sql, function (err, response) {
    if (err) throw err;
    res.send(JSON.stringify(response));
  });
});

exports.add_posts = asyncHandler(async (req, res, next) => {
  sql = "INSERT INTO posts (name, post) VALUES ('" + req.params.name + "', '" + req.params.post + "')";
  console.log(sql);
  con.query(sql, function (err, response) {
    if (err) throw err;
    res.send(JSON.stringify(response));
  });
});

// exports.add_posts = function addPosts(blogPost) {
//   asyncHandler(async (req, res, next) => {
//     sql = "INSERT INTO posts (name, post) VALUES (" + blogPost.name + "," + blogPost.post + ")";
//     console.log(sql);
//     con.query(sql, function (err, response) {
//       if (err) throw err;
//       res.send(JSON.stringify(response));
//     });
//   });
// };