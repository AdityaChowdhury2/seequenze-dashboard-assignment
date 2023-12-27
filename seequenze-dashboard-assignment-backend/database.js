const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
}).promise()

async function getImages() {
    const [rows] = await pool.query("SELECT * FROM images")
    return rows
}
async function main() {
    const images = await getImages();
    console.log(images)
}
main();