const dbConnection = require("../database/db_connection");

const returnBook = (book_id, cb) => {
  dbConnection.query(
    `delete from borrowing where book_id=${book_id}`,
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};

module.exports = returnBook;
