import express from "express";
import cors from "cors";
import { db } from "./connection.mjs";

export const adduser = new express.Router();

adduser.use(cors());
adduser.use(express.json());

adduser.post("/adduser", (req, res) => {
  const user = req.body.user;
  const email = req.body.email;

  db.query(
    "INSERT INTO users (user_name,email_address) VALUES(?,?)",
    [user, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("values inserted");
      }
    }
  );
});
adduser.get("/adduserdata", (req, res) => {
  db.query("SELECT user_name from users", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});
