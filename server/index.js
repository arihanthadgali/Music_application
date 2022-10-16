import express from "express";
import { createConnection } from "mysql";
import cors from "cors";
import e from "express";

const app = express();
app.use(cors());
app.use(express.json());
const db = createConnection({
  port: 3006,
  Name: "Local instance wampmysqld",
  user: "root@localhost",
  host: "localhost",
  password: "password",
  database: "music-db",
});

app.post("/add", (req, res) => {
  const name = req.body.name;
  const dob = req.body.dob;
  const bio = req.body.bio;

  db.query(
    "INSERT INTO artists(name,dob,bio) VALUES(?,?,?)",
    [name, dob, bio],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values Inserted");
      }
    }
  );
});

// db.connect(function (err) {
//   if (err) throw err;
//   console.log("connected");
//   var sql = "INSERT INTO artists(name,dob,bio) VALUES('kdsbb','sjyf','sjbgfj')";
//   db.query(sql, function (err, result) {
//     if (err) throw err;
//     console.log("record inserted");
//   });
// });
app.listen(3006, () => {
  console.log("hey there u are connected");
});
