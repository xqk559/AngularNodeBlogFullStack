var mysql = require('mysql');

export var con = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "db"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  // con.query("CREATE DATABASE db", function (err, result) {
  //   if (err) throw err;
  //   console.log("Database created");
  // });

  // var sql = "CREATE TABLE posts (name VARCHAR(255), post VARCHAR(255))";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table created");
  // });

  // var sql = "ALTER TABLE posts ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("Table updated");
  // });

  // var sql = "INSERT INTO posts (name, post) VALUES ('Gwynethyn', 'This blog is coming along!')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });

  // var sql = "INSERT INTO posts (name, post) VALUES ?";
  // var values = [
  //   ['John', 'This blog is nearly adequate'],
  //   ['Peter', 'What is this blog about?']
  // ];
  // con.query(sql, [values], function (err, result) {
  //   if (err) throw err;
  //   console.log("Number of records inserted: " + result.affectedRows);
  // });

  // con.query("SELECT * FROM posts", function (err, result) {
  //   if (err) throw err;
  //   console.log("Result: " + JSON.stringify(result));
  // });
});