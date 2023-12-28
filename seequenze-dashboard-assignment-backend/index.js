const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config();
const port = 5000;
const app = express();


app.use(cors(

));
app.use(express.json());

const db = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE

})

app.get('/', (req, res) => {
    return res.json("From backend side");
})

app.get('/images', (req, res) => {
    const sql = "SELECT * FROM images";
    db.query(sql, (err, data) => {
        if (err) res.json(err);
        else {
            res.json(data);
        }
    })
})

app.post('/images', (req, res) => {

    const values = [
        req.body.author,
        req.body.url,
        req.body.download_url
    ]
    const sql = `INSERT INTO images (author, url,download_url) VALUES (?)`;
    db.query(sql, [values], (err, data) => {
        if (err) res.json(err);
        else {
            res.json(data)
        }
    })
})

app.patch('/images/:id', (req, res) => {
    const values = [
        req.body.author,
        req.body.url,
        req.body.download_url
    ]
    const id = req.params.id;
    const sql = `UPDATE images set author = ?, url = ?, download_url = ? WHERE id = ?`;
    db.query(sql, [...values, id], (err, data) => {
        if (err) res.json(err);
        else {
            res.json(data)
        }
    })
})

app.delete('/images/:id', (req, res) => {
    const id = req.params.id;
    const sql = `DELETE FROM images WHERE id = ${id}`;
    db.query(sql, (err, data) => {
        if (err) res.json(err);
        else {
            res.json(data)
        }
    })
})

app.listen(port, () => {
    console.log('listening on port ', port);
})