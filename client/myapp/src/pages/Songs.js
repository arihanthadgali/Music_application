import React from "react";
import { useState } from "react";
import "../Styles/songs.css";
import Songdata from "../components/AddSong";
// import Popup from "reactjs-popup";

function Songs(newrating) {
  const [song, setsong] = useState(false);

  return (
    <div>
      <button
        className="btn-add"
        onClick={() => {
          setsong(true);
        }}
      >
        +Add Song
      </button>

      {/* <Popup trigger={<button> add song</button>} position="right center">
        <div>Popup content here !!</div>
      </Popup>

      <br /> */}
      {song && <Songdata closeSong={setsong} />}

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
