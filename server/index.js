import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123123",
    database: "test",
});

app.get("/users", (req, res) => {
    const q = "SELECT * FROM users";
    db.query(q, (err, data) => {
        if (err) {
            console.log(err);
            return res.json(err);
        }
        return res.json(data);
    });
});

app.post("/users", (req, res) => {
    const q = "INSERT INTO users(`nom`, `date_naiss`, `email`, `age`) VALUES (?)";

    const values = [
        req.body.nom,
        req.body.date_naiss,
        req.body.email,
        req.body.age,
    ];

    db.query(q, [values], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.delete("/users/:id", (req, res) => {
    const userId = req.params.id;
    const q = " DELETE FROM users WHERE id = ? ";

    db.query(q, [userId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.put("/users/:id", (req, res) => {
    const userId = req.params.id;
    const q =
        "UPDATE users SET `nom`= ?, `date_naiss`= ?, `email`= ?, `age`= ? WHERE id = ?";

    const values = [
        req.body.nom,
        req.body.date_naiss,
        req.body.email,
        req.body.age,
    ];

    db.query(q, [...values, userId], (err, data) => {
        if (err) return res.send(err);
        return res.json(data);
    });
});

app.listen(8800, () => {
    console.log("Connected to Backend!");
});