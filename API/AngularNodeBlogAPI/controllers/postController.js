var con = require('../db.js');
const asyncHandler = require("express-async-handler");

exports.post_list = asyncHandler(async (req, res, next) => {
  sql = "SELECT * FROM posts";
  con.query(sql, function (err, response) {
    if (err) throw err;
    res.send(JSON.stringify(response));
  });
});

exports.add_posts = asyncHandler(async (req, res, next) => {
  sql = "INSERT INTO posts (name, post) VALUES ('" + req.params.name + "', '" + req.params.post + "')";
  con.query(sql, function (err, response) {
    if (err) throw err;
    res.send(JSON.stringify(response));
  });
});

exports.remove_posts = asyncHandler(async (req, res, next) => {
  sql = "DELETE FROM posts WHERE id=" + req.params.id + ";";
  con.query(sql, function (err, response) {
    if (err) throw err;
    res.send(JSON.stringify(response));
  });
});

exports.update_post = asyncHandler(async (req, res, next) => {
  sql = "UPDATE posts SET post = '" + req.params.post + "' WHERE id = " + req.params.id + ";";
  con.query(sql, function (err, response) {
    if (err) throw err;
    res.send(JSON.stringify(response));
  });
});