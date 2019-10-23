const databaseConnection = require("../database/db_connection.js");

const addBook = (title, author, cb) => {
  databaseConnection.query(
    "INSERT INTO books (title, author) VALUES ($1, $2)",
    [title, author],
    (err, res) => {
      if (err) {
        return cb(err);
      } else {
        cb(null, res);
      }
    }
  );
};

module.exports = addBook;
