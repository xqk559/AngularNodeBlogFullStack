import { con as dbConnection } from '../db'

const blogPost = require("../models/blogPost");
const asyncHandler = require("express-async-handler");

dbConnection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  dbConnection.query("SELECT * FROM posts", function (err, result) {
    if (err) throw err;
    console.log("Result: " + JSON.stringify(result));
  });
});

// exports.index = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: Site Home Page");
// });

// // Display list of all blogPosts.
// exports.blogPost_list = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: blogPost list");
// });

// // Display detail page for a specific blogPost.
// exports.blogPost_detail = asyncHandler(async (req, res, next) => {
//   res.send(`NOT IMPLEMENTED: blogPost detail: ${req.params.id}`);
// });

// // Display blogPost create form on GET.
// exports.blogPost_create_get = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: blogPost create GET");
// });

// // Handle blogPost create on POST.
// exports.blogPost_create_post = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: blogPost create POST");
// });

// // Display blogPost delete form on GET.
// exports.blogPost_delete_get = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: blogPost delete GET");
// });

// // Handle blogPost delete on POST.
// exports.blogPost_delete_post = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: blogPost delete POST");
// });

// // Display blogPost update form on GET.
// exports.blogPost_update_get = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: blogPost update GET");
// });

// // Handle blogPost update on POST.
// exports.blogPost_update_post = asyncHandler(async (req, res, next) => {
//   res.send("NOT IMPLEMENTED: blogPost update POST");
// });