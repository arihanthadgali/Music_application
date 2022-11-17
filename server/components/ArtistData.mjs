import express from "express";
import cors from "cors";
import { db } from "./connection.mjs";

export const addartist = new express.Router();
addartist.use(cors());
addartist.use(express.json());

addartist.post("/addartist", (req, res) => {
  const name = req.body.name;
  const dob = req.body.dob;
  const bio = req.body.bio;
  console.log("Name" + name + "DOB" + dob + "BIO" + bio);

  db.query(
    "INSERT INTO artist_data(artist_name,date_of_birth,artist_bio) VALUES(?,?,?)",
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

addartist.get("/getartistdata", (req, res) => {
  db.query("SELECT * from artist_data", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
