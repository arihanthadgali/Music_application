import express from "express";
import { createConnection } from "mysql";
import cors from "cors";

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
  const song = req.body.song;
  const date = req.body.date;
  const artWork = req.body.artWork;

  db.query(
    "INSERT INTO music-db(song,dor) VALUES(?,?)",
    [song, date],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values Inserted");
      }
    }
  );
});
app.listen(3006, () => {
  console.log("hey there u are connected");
});
