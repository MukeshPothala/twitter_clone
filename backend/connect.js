const mysql = require("mysql2");

const config = {
    host: "localhost",
    port: 3306,
    database: "socialMedia",
    user: "root",
    password: "password",
    connectionLimit: 6000,
};

const db = mysql.createPool(config);

module.exports = db;
