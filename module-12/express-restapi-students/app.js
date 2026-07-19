const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const sqlite3 = require("sqlite3").verbose();
const db = new sqlite3.Database("./db/students.db");

app.get("/students", (req, res) => {
  db.all("SELECT * FROM students", (err, rows) => {
    if (err) {
      res.status(500).send("Unknown error");
    } else if (rows) {
      res.status(200).json(rows);
    } else {
      res.status(404).send("No records found");
    }
  });
});

app.get("/students/:studentId", (req, res) => {
  db.get(
    "SELECT * FROM students WHERE id = ?",
    req.params.studentId,
    (err, row) => {
      console.log(row);
      if (err) {
        res.status(500).send("Unknown error");
      } else if (!row) {
        res.status(404).send("No record found");
      } else {
        res.status(200).json(row);
      }
    },
  );
});

app.post("/students", (req, res) => {
  const { name, email, program } = req.body;
  if (
    !name ||
    !email ||
    !program ||
    typeof name != "string" ||
    typeof email != "string" ||
    typeof program != "string"
  )
    return res.status(400).send("Invalid input data");
  db.run(
    "INSERT INTO students (name, email, program) VALUES(?,?,?)",
    [name, email, program],
    function (err) {
      if (err) res.status(500).send(`Error adding new student record.${err}`);
      else
        res
          .status(201)
          .send(`New student record added with ID - ${this.lastID}`);
    },
  );
});

app.put("/students/:studentId", (req, res) => {
  const { name, email, program } = req.body;
  if (
    !name ||
    !email ||
    !program ||
    typeof name != "string" ||
    typeof email != "string" ||
    typeof program != "string"
  )
    return res.status(400).send("Invalid input data");
  db.run(
    "UPDATE students SET name = ?, email = ?, program = ? WHERE id = ?",
    [name, email, program, req.params.studentId],
    function (err) {
      if (err) res.status(500).send(`Error updating student record.${err}`);
      else if (this.changes == 0)
        res.status(404).send(`Student ID ${req.params.studentId} not found`);
      else
        res
          .status(200)
          .send(`Student ID ${req.params.studentId} updated succesfully`);
    },
  );
});

app.delete("/students/:studentId", (req, res) => {
  db.run(
    "DELETE FROM students WHERE id = ?",
    [req.params.studentId],
    function (err) {
      if (err) res.status(500).send(`Error deleting student record.${err}`);
      else if (this.changes == 0)
        res.status(404).send(`Student ID ${req.params.studentId} not found`);
      else
        res
          .status(200)
          .send(`Student ID ${req.params.studentId} deleted succesfully`);
    },
  );
});

app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status == 400)
    return res.status(400).send("Invalid input data format");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
