import express from "express";
import cors from "cors";
import { db } from "./connection.mjs";

export const addsong = new express.Router();

addsong.use(cors());
addsong.use(express.json());

addsong.post("/addsong", (req, res) => {
  const SongName = req.body.SongName;
  const DOR = req.body.DOR;
  const formData = req.body.formData;
  const Rate = req.body.Rate;

  console.log(SongName + DOR + Rate);

  db.query(
    "INSERT INTO artists_songs (song_name,date_of_release,user_ratings,song_cover) VALUES(?,?,?,?)",
    [SongName, DOR, Rate, formData],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});
addsong.get("/addsongdata", (req, res) => {
  db.query(
    "select user_id,artist_id,song_name from artist_data join artists_songs on artist_data.id=artists_songs.artist_id join users on users.id=artists_songs.user_id ",
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});
