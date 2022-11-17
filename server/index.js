import express from "express";
import cors from "cors";
import { addartist } from "./components/ArtistData.mjs";
import { addsong } from "./components/SongData.mjs";
import { adduser } from "./components/Userdata.mjs";
//import { image } from "./components/image.mjs";

import multer from "multer";

const app = express();
app.use(cors());
app.use(express.json());
app.use(addartist);
app.use(addsong);
app.use(adduser);
app.use("/uploads", express.static("./uploads"));
app.use(multer);

app.listen(3006, () => {
  console.log("hey there u are connected");
});
