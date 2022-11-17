import React, { useEffect } from "react";
import { useState } from "react";
import Axios from "axios";

function Songdata({ closeSong }) {
  const [songName, setSongName] = useState("");
  const [DOR, setDOR] = useState(0);

  const [filename, setfilename] = useState("");

  const [id, setid] = useState([]);
  const [artist, setartist] = useState([]);

  const saveFile = (e) => {
    setfilename(e.target.files[0]);
  };

  useEffect(function () {
    Axios.get("http://localhost:3006/getartistdata").then((response) =>
      setartist(response.data)
    );
  }, []);

  const Song = (e) => {
    //e.preventDefault();
    const formData = new FormData();
    formData.append("photo", filename);
    formData.append("songName", songName);
    formData.append("DOR", DOR);
    formData.append("id", id);
    console.log(songName);
    console.log(DOR);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    };
    Axios.post("http://localhost:3006/addsong", formData, config).then(() => {
      console.log("Sucess");
    });
  };

  return (
    <div className="song-container">
      <div className="song-content">
        <div className="header">
          <button
            onClick={() => {
              closeSong(false);
            }}
          >
            X
          </button>
          <h1>Adding new song</h1>
        </div>
        <div className="song-body">
          <label className="label1">Song Name</label>
          <input
            type="text"
            onChange={(event) => {
              setSongName(event.target.value);
            }}
          ></input>
          <br />
          <label className="label2">Date Of Release</label>
          <input
            type="date"
            onChange={(event) => {
              setDOR(event.target.value);
            }}
          ></input>
          <br />
          <br />
          <label className="label3">Artists</label>
          <select
            onChange={(e) => {
              setid(e.target.value);
              console.log(e.target.value);
            }}
          >
            {artist.map((val, i) => (
              <option key={i} value={val.id}>
                {val.artist_name}
              </option>
            ))}
          </select>
          <br />
          <label className="label4"> Artwork</label>
          <input type="file" name="photo" onChange={saveFile}></input>
        </div>

        <br />
        <div className="song-footer">
          <button
            onClick={() => {
              closeSong(false);
            }}
          >
            Cancel
          </button>
          <button
            onClick={() => {
              Song();
              closeSong(false);
            }}
          >
            save
          </button>
        </div>
      </div>
    </div>
  );
}

export default Songdata;
