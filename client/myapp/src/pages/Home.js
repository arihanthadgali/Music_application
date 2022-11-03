import Axios from "axios";
import React, { useState } from "react";
import ReactStars from "react-stars";
import Songdata from "../components/AddSong";

function Home() {
  const [artistdata, setartistdata] = useState([]);

  const ratingChanged = (newrating) => {
    console.log(newrating);
    Songdata(newrating);
  };

  const getartistdata = () => {
    Axios.get("http://localhost:3006/addartistdata").then((response) => {
      setartistdata(response.data);
    });
  };
  return (
    <div>
      <h1>Top 10 Songs</h1>
      <button onClick={getartistdata}>show data</button>
      {artistdata.map((val, i) => {
        return <div key={i}>{val.artist_name}</div>;
      })}

      <table className="home-table">
        <tbody>
          <tr>
            <th>Artwork</th>
            <th>Song</th>
            <th>Date of Release</th>
            <th>Artist</th>
            <th>Rate</th>
          </tr>

          <tr>
            <td>image</td>
            <td>song</td>
            <td>artist</td>
            <td>dor</td>
            <td>
              {/* <ReactStars onChange={rating} /> */}
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              />
            </td>
          </tr>
          <tr>
            <td>image</td>
            <td>song</td>
            <td>artist</td>
            <td>dor</td>
            <td>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              />
            </td>
          </tr>
          <tr>
            <td>image</td>
            <td>song</td>
            <td>artist</td>
            <td>dor</td>
            <td>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              />
            </td>
          </tr>
          <tr>
            <td>image</td>
            <td>so</td>
            <td>tist</td>
            <td>dor</td>
            <td>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              />
            </td>
          </tr>
          <tr>
            <td>age</td>
            <td>ng</td>
            <td>ast</td>
            <td>dor</td>
            <td>
              <ReactStars
                count={5}
                onChange={ratingChanged}
                size={24}
                color2={"#ffd700"}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
