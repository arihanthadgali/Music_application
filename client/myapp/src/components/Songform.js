import React from "react";
import "./songs.css";
import { useState } from "react";
import AddArtist from "../components/AddArtist";

function Songform() {
  const [artist, setartist] = useState(false);

  return (
    <div className="song-container">
      <h1>Adding new song</h1>
      <label>Song Name</label>
      <input type="text"></input>
      <br />
      <label>Date Of Release</label>
      <input type="date"></input>
      <br />
      <label>Artwork</label>
      <input type="alt-image"></input>
      <br />
      <label>Artists</label>
      <select name="artist-names">
        <option value="vidhyavox">VidhyaVox</option>
        <option value="arjit">Arjit</option>
        <option value="ram">Ram</option>
      </select>
      <button
        onClick={() => {
          setartist(true);
        }}
      >
        +Add artist
      </button>
      <br />
      <label>Rate</label>
      <input type="text"></input>
      <button>Cancel</button>
      <button>save</button>

      {artist && <AddArtist closeartist={setartist} />}
    </div>
  );
}

export default Songform;
