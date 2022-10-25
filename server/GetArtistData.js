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
console.log("Connected to DB");
app.get("/localhost:3000/home", (req, res) => {
  db.query(
    // "SELECT song_cover, song_name, date_of_release, artist_name,user_ratings FROM artists_songs a,artist_data b where b.id=a.artist_id",
    "select * from artist_data",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values Fetched");
      }
      console.log(
        song_cover + song_name + date_of_release + artist_name + user_ratings
      );
    }
  );
});
// db.query("select * from artist_data", function (err, result, fields) {
//   if (err) throw err;
//   console.log(result);
// });

app.listen(3006, () => {
  console.log("hey there u are connected");
});
