var con = require('../db.js');
var express = require('express');
var router = express.Router();
const asyncHandler = require("express-async-handler");

exports.post_list = asyncHandler(async (req, res, next) => {
  con.query("SELECT * FROM posts", function (err, response) {
    if (err) throw err;
    res.send(JSON.stringify(response));
  });
});