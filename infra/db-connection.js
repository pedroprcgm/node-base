const mysql = require('mysql'),
    config = require('../config/config');
var connection = {};

var _dbConfig = process.env.NODE_ENV === "production"
    ? config.dbProduction
    : config.dbDevelopment;

_dbConfig.connectionLimit = 10;

const pool = mysql.createPool(_dbConfig);

pool.getConnection((err, conn) => {
    if (err) {
        throw err;
    }
    connection = conn;
    console.log('Connected to database');
});

module.exports = connection;