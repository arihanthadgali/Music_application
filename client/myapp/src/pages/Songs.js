import React, { useEffect } from "react";
import { useState } from "react";
import "../Styles/songs.css";
import "../Styles/home.css";
import Songdata from "../components/AddSong";
import Axios from "axios";
import ReactStars from "react-stars";

function Songs() {
  const [song, setsong] = useState(false);
  const [songdata, setsongdata] = useState([]);
  const [rate, setrate] = useState([]);
  const [songid, setsongid] = useState("");

  const getsongdata = () => {
    Axios.get("http://localhost:3006/getsongdata").then((response) => {
      setsongdata(response.data);
    });
  };
  useEffect(() => {
    getsongdata();
  });

  const idvalue = (e) => {
    console.log(e);
    setsongid(e);
  };
  const ratingChanged = (newrating) => {
    console.log(newrating);
    setrate(newrating);

    Axios.post("http://localhost:3006/addrate", {
      rate: rate,
      songid: songid,
    }).then(() => {
      console.log("Sucess");
    });
  };

  return (
    <div>
      <button
        className="btn-song-add"
        onClick={() => {
          setsong(true);
        }}
      >
        +Add Song
      </button>
      <table className="home-table">
        <tbody>
          <tr>
            <th>Artwork</th>
            <th>Song</th>
            <th>Date of Release</th>
            <th>Artist</th>
            <th>Rate</th>
          </tr>
        </tbody>
      </table>
      {song && <Songdata closeSong={setsong} />}

      {songdata.length > 0
        ? songdata.map((val, i) => {
            return (
              <div key={i} className="song-content">
                <table className="data-content">
                  <tr>
                    <td className="song-cover">
                      <img
                        src={`http://localhost:3006/uploads/${val.song_cover}`}
                        alt=""
                        width="70"
                        height="50"
                      ></img>
                    </td>

                    <td className="song-name">{val.song_name}</td>
                    <td className=" song-date">{val.date_of_release}</td>
                    <td className="artist-name">{val.artist_name}</td>
                    <td className="rate">
                      <ReactStars
                        count={5}
                        value={val.user_ratings}
                        onChange={(e) => {
                          ratingChanged(e);
                          idvalue(val.song_id);
                        }}
                        size={24}
                        color2={"#ffd700"}
                      />
                    </td>
                  </tr>
                </table>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default Songs;
