import React, { useState, useEffect } from "react";
import Axios from "axios";
import "../Styles/songs.css";

import AddArtist from "../components/AddArtist";

function Artists() {
  const [artist, setartist] = useState(false);
  const [artistdata, setartistdata] = useState([]);

  const getartistdata = () => {
    Axios.get("http://localhost:3006/getartistdata").then((response) => {
      setartistdata(response.data);
    });
  };
  useEffect(() => {
    getartistdata();
  });

  return (
    <div className="artist-add">
      <button
        className="add-artist"
        onClick={() => {
          setartist(true);
        }}
      >
        +Add Artist
      </button>
      <br />
      {artist && <AddArtist closeartist={setartist} />}
      <table className="home-table">
        <tbody>
          <tr>
            <th>Artist</th>
            <th>Date of Birth</th>
            <th>Bio</th>
          </tr>
        </tbody>
      </table>
      {artistdata.length > 0
        ? artistdata.map((val, i) => {
            return (
              <>
                <table className="artist_table">
                  <tbody className="artist_body">
                    <tr>
                      <td className="artist-name-data">{val.artist_name}</td>
                      <td className="artist-dob-data">{val.date_of_birth}</td>
                      <td className="artist-bio-data">{val.artist_bio}</td>
                    </tr>
                  </tbody>
                </table>
              </>
            );
          })
        : ""}
    </div>
  );
}

export default Artists;
