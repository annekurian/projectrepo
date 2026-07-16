const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/products.db");

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
