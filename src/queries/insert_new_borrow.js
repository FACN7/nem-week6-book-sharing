const dbConnection = require("../database/db_connection");

const insertNewBorrow = (book_id, student_id, end_time, cb) => {
  // var today = new Date();
  // var dd = String(today.getDate()).padStart(2, "0");
  // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  // var yyyy = today.getFullYear();
  // start_time = yyyy + "-" + mm + "-" + dd;

  dbConnection.query(
    "INSERT INTO borrowing (book_id,student_id,end_time)VALUES($1,$2,$3)",
    [book_id, student_id, end_time],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res.rows);
    }
  );
};

module.exports = insertNewBorrow;
