import React, { useEffect } from "react";
import "../Styles/songs.css";
import { useState } from "react";
import Axios from "axios";
import Userdata from "../components/AddUser";

function Songdata({ closeSong }) {
  const [SongName, setSongName] = useState("");
  const [DOR, setDOR] = useState(0);
  const [Artwork, setArtwork] = useState("");
  const [modal, setmodal] = useState(false);
  const [user, setuser] = useState([]);

  const [songdata, setsongdata] = useState([]);

  // const getsongdata = () => {
  //   Axios.get("http://addsongdatalocalhost:3006/").then((response) => {
  //     const names = response.data;
  //     // response.json();
  //     setsongdata(names);
  //     // console.log(response);
  //   });
  // };
  useEffect(function () {
    Axios.get("http://localhost:3006/addartistdata")
      .then((response) => setsongdata(response.data))
      .then((error) => console.log(error));
  }, []);

  useEffect(function () {
    Axios.get("http://localhost:3006/adduserdata")
      .then((response) => setuser(response.data))
      .then((error) => console.log(error));
  }, []);

  const Song = () => {
    const formData = new FormData();
    formData.append("Artwork", Artwork);
    Axios.post("http://localhost:3006/addsong", {
      SongName: SongName,
      Dor: DOR,
      formData: formData,
      user: user,
      //artist: artist,
    }).then(() => {
      console.log("Sucess");
    });
  };

  const handleChange = (e) => {
    console.log(e.target.files);
    setArtwork(e.target.files[0]);
  };

  return (
    <div className="song-container">
      <button
        onClick={() => {
          closeSong(false);
        }}
      >
        X
      </button>
      <h1>Adding new song</h1>
      <label
        onChange={(event) => {
          setSongName(event.target.value);
        }}
      >
        Song Name
      </label>
      <input type="text"></input>
      <br />
      <label
        onChange={(event) => {
          setDOR(event.target.value);
        }}
      >
        Date Of Release
      </label>
      <input type="date"></input>
      <br />
      <label>Artwork</label>
      <input type="file" onChange={handleChange}></input>
      <br />
      <label>Artists</label>
      <select>
        {songdata.map((val, i) => (
          <option key={i} value={val.id}>
            {val.artist_name}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          Song();
        }}
      >
        +Add song
      </button>
      <br />

      <label>user</label>

      <select>
        {user.map((val, i) => (
          <option key={i} value={val.id}>
            {val.user_name}
          </option>
        ))}
      </select>
      <button
        onClick={() => {
          closeSong(false);
        }}
      >
        Cancel
      </button>
      <button
        onClick={() => {
          // eslint-disable-next-line no-lone-blocks
          {
            Song();
          }
          setmodal(true);
        }}
      >
        save
      </button>

      {modal && <Userdata />}
    </div>
  );
}

export default Songdata;
