const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/products.db");

app.get("/product", (req, res) => {
  db.all("SELECT * from products", (err, rows) => {
    if (err) {
      res.status(500).send("Unknown error");
    } else {
      if (rows) {
        res.status(200).json(rows);
      } else {
        res.status(400).send("No records found");
      }
    }
  });
});

app.get("/product/:productId", (req, res) => {
  db.get(
    "SELECT * from products where product_id = ?",
    req.params.productId,
    (err, row) => {
      if (err) {
        res.status(500).send("Unknown error");
      } else if (row) {
        res.status(200).json(row);
      } else {
        res.status(404).send("Record not found");
      }
    },
  );
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
