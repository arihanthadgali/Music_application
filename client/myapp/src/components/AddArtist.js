import React, { useState } from "react";
import "./songs.css";
import Axios from "axios";

function AddArtist({ closeartist }) {
  const [name, setname] = useState("");
  const [dob, setdob] = useState(0);
  const [bio, setbio] = useState("");

  const artist = () => {
    Axios.post("http://localhost:3006/addartist", {
      name: name,
      dob: dob,
      bio: bio,
    }).then(() => {
      console.log("Sucess");
    });
  };
  return (
    <div className="modalbackground">
      <div className="modalContainer">
        <button
          onClick={() => {
            closeartist(false);
          }}
        >
          X
        </button>
        <div className="title">
          <h1>Adding a new Artist</h1>
        </div>
        <div className="body">
          <label>Name :</label>
          <input
            type="text"
            onChange={(event) => {
              setname(event.target.value);
            }}
          ></input>
          <br />
          <label>DOB:</label>
          <input
            type="date"
            onChange={(event) => {
              setdob(event.target.value);
            }}
          ></input>
          <br />
          <label>Bio:</label>
          <input
            type="image-alt"
            onChange={(event) => {
              setbio(event.target.value);
            }}
          ></input>
        </div>

        <div className="footer">
          <button onClick={artist()}>Add</button>
          <button
            onClick={() => {
              closeartist(false);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddArtist;
