const dbConnection = require("../database/db_connection");

const returnBook = cb => {

    start_time = yyyy + '-' + mm + '-' + dd;

    dbConnection.query(
        "INSERT INTO borrowing (book_id,student_id,start_time,end_time)VALUES($1,$2,$3,$4)", [book_id, student_id, start_time, end_time],
        (err, res) => {
            if (err) return cb(err);
            console.log("res.rows=:", res.rows);
            cb(null, res.rows);
        }
    );
};


module.exports = returnBook;