/**
 * Created by Aaron on 2/3/2016.
 */
var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "worddb_schema"
});

con.connect(function(err){
    if(err){
        console.log('Error connecting to Db');
        return;
    }
    console.log('Connection established');
});

con.query('INSERT INTO class (subject, number) VALUES ("CS", "1332");', function(err) {
    if (err) throw err;

});

con.end(function(err) {
    // The connection is terminated gracefully
    // Ensures all previously enqueued queries are still
    // before sending a COM_QUIT packet to the MySQL server.
});