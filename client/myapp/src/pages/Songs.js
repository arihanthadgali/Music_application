import React from "react";
import { useState } from "react";
import "../components/songs.css";
import AddArtist from "../components/AddArtist";

function Songs() {
  const [artist, setartist] = useState(false);

  return (
    <div>
      <button
        className="btn-add"
        onClick={() => {
          setartist(true);
        }}
      >
        +Add Artist
      </button>
      <br />
      {artist && <AddArtist closeartist={setartist} />}

      <table className="song-table">
        <tbody>
          <tr>
            <th>Artwork</th>
            <th>Song</th>
            <th>Date of release</th>
            <th>Artists</th>
            <th>Rate</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Songs;
