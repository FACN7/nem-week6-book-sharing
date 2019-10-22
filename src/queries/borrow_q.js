const dbConnection = require('../database/db_connection');

const getData = (cb) => {
    dbConnection.query("select b.isnb,b.title,b.author,bo.start_time,bo.end_time,(case when bo.end_time>current_date then 'available' else 'unavailable' end) as availability from books b join borrowing bo on b.isnb=bo.book_id ", (err, res) => {
        if (err) return cb(err);
        console.log('res.rows=:', res.rows);
        cb(null, res.rows);
    })
}

module.exports = getData;