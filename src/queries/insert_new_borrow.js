const dbConnection = require("../database/db_connection");

const insertNewBorrow = cb => {
    var start_time = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
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


module.exports = insertNewBorrow;