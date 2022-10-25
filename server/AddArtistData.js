import express from "express";
import { createConnection } from "mysql";
import cors from "cors";
import e from "express";
const app = express();
app.use(cors());
app.use(express.json());


var db = createConnection({
  port: "3000",
  user: "root",
  host: "localhost",
  password: "Mysql@123",
  database: "music_db",
});
app.post("/addartist", (req, res) => {
  const name = req.body.name;
  const dob = req.body.dob;
  const bio = req.body.bio;
  console.log("Name" + name + "DOB" + dob + "BIO" + bio);

  db.query(
    "INSERT INTO artist_data (artist_name,date_of_birth,artist_bio) VALUES(?,?,?)",
    [name, dob, bio],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});

app.listen(3006, () => {
  console.log("hey there u are connected");
});