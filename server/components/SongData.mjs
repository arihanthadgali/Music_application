import express from "express";
import cors from "cors";
import { db } from "./connection.mjs";
import multer from "multer";
import moment from "moment";
export const addsong = new express.Router();

addsong.use(cors());
addsong.use(express.json());

db.connect(function (err) {
  if (err) {
    return console.error("error: " + err.message);
  }
  console.log("Connected to the MySQL server.");
});

// //! Use of MulterG
var storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./uploads");
  },
  filename: (req, file, callBack) => {
    callBack(null, `image-${Date.now()}.${file.originalname}`);
  },
});

//img filter
const isImage = (req, file, callBack) => {
  if (file.mimetype.startsWith("image")) {
    callBack(null, true);
  } else {
    callBack(null, Error("only image is allowed"));
  }
};
var upload = multer({
  storage: storage,
  fileFilter: isImage,
});

addsong.post("/addsong", upload.single("photo"), (req, res) => {
  const songName = req.body.songName;
  const DOR = req.body.DOR;
  const id = req.body.id;
  const { filename } = req.file;
  console.log(filename);
  db.query(
    "INSERT INTO artists_songs (song_name,date_of_release,artist_id,song_cover) VALUES(?,?,?,?)",
    [songName, DOR, id, filename],

    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});
addsong.get("/getsongdata", (req, res) => {
  db.query(
    "select song_id,song_cover,song_name,artist_name,date_of_release,user_ratings from artist_data a,artists_songs b where a.id = b.artist_id",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

addsong.get("/topsongs", (req, res) => {
  db.query(
    "select song_id,song_cover,song_name,date_of_release,artist_name,user_ratings from artist_data a,artists_songs b where a.id = b.artist_id order by user_ratings desc limit 5",

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

addsong.post("/addrate", (req, res) => {
  const rate = req.body.rate;
  const songid = req.body.songid;
  console.log(rate, songid);
  db.query(
    "UPDATE artists_songs SET user_ratings = ? WHERE song_id = ?",
    [rate, songid],

    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
