require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || "bditens",
    port: process.env.DB_PORT || 3306,
});

app.post("/item", (req, res) => {
    const { texto } = req.body;
    const SQL = "INSERT INTO listaitens ( itens ) VALUES (?)";

    db.query(SQL, texto, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro ao inserir item.");
        }
        res.send("Inserção realizada com sucesso!");
    });
});

app.get("/item", (req, res) => {
    const SQL = "SELECT * FROM listaitens";

    db.query(SQL, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro ao buscar itens.");
        }
        res.send(result);
    });
});

app.delete("/item/:id", (req, res) => {
    const { id } = req.params;
    const SQL = "DELETE FROM listaitens WHERE ( `id` = ? )";

    db.query(SQL, id, (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).send("Erro ao deletar item.");
        }
        res.send(result);
    });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
