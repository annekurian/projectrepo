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
      } else if (!row.length) {
        res.status(404).send("No record found");
      } else {
        res.status(200).json(row);
      }
    },
  );
});

app.post("/students", (req, res) => {
  db.run(
    "INSERT INTO students (name, email, program) VALUES(?,?,?)",
    [req.body.name, req.body.email, req.body.program],
    (err) => {
      if (err) res.status(500).send(`Error adding new student record.${err}`);
      else
        res
          .status(200)
          .send(`New student record added with ID: ${this.lastID}`);
    },
  );
});

app.put("/students/:studentId", (req, res) => {
  db.run(
    "UPDATE students SET email = ? WHERE id = ?",
    [req.body.email, req.params.studentId],
    (err) => {
      if (err) res.status(500).send(`Error updating student record.${err}`);
      else
        res
          .status(200)
          .send(`Student ID ${req.params.studentId} updated succesfully`);
    },
  );
});

app.delete("/students/:studentId", (req, res) => {
  db.run("DELETE FROM students WHERE id = ?", [req.params.studentId], (err) => {
    if (err) res.status(500).send(`Error deleting student record.${err}`);
    else
      res
        .status(200)
        .send(`Student ID ${req.params.studentId} deleted succesfully`);
  });
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
