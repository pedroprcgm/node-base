const mysql = require('mysql'),
    config = require('../config/config');

module.exports = (app) => {
    var _dbConfig = process.env.NODE_ENV === "production"
        ? config.dbProduction
        : config.dbDevelopment;
    
    _dbConfig.connectionLimit = 10;
    
    const pool = mysql.createPool(_dbConfig);
    
    return pool.getConnection((err, conn) => {
        if (err) {
            throw err;
        }
        return conn;
    });    
};