import React from "react";
import ReactStars from "react-rating-stars-component";

function Home() {
  const rating = () => {
    alert("you have changed rating");
  };
  return (
    <div>
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
              <ReactStars onChange={rating} />
            </td>
          </tr>
          <tr>
            <td>image</td>
            <td>song</td>
            <td>artist</td>
            <td>dor</td>
            <td>
              <ReactStars />
            </td>
          </tr>
          <tr>
            <td>image</td>
            <td>song</td>
            <td>artist</td>
            <td>dor</td>
            <td>
              <ReactStars onChange={rating} />
            </td>
          </tr>
          <tr>
            <td>image</td>
            <td>so</td>
            <td>tist</td>
            <td>dor</td>
            <td>
              <ReactStars onChange={rating} />
            </td>
          </tr>
          <tr>
            <td>age</td>
            <td>ng</td>
            <td>ast</td>
            <td>dor</td>
            <td>
              <ReactStars onChange={rating} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Home;
