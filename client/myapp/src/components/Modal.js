import React, { useState } from "react";
import "./songs.css";
import Axios from "axios";

function Modal(closeModal) {
  const [song, setsong] = useState("");
  const [date, setdate] = useState(0);
  const [artWork, setartWork] = useState("");

  const addsong = () => {
    Axios.post("http://localhost:3006/add", {
      song: song,
      date: date,
      artWork: artWork,
    }).then(() => {
      console.log("Sucess");
    });
  };
  return (
    <div className="modalbackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}>X</button>
        <div className="title">
          <h1>Adding a new song</h1>
        </div>
        <div className="body">
          Song Name:{" "}
          <input
            type="text"
            aria-label="song"
            onChange={(event) => {
              setsong(event.target.value);
            }}
          ></input>
          <br />
          Date Released:{" "}
          <input
            type="date"
            aria-label="date"
            onChange={(event) => {
              setdate(event.target.value);
            }}
          ></input>
          <br />
          Art work:{" "}
          <input
            type="image-alt"
            aria-label="image"
            onChange={(event) => {
              setartWork(event.target.value);
            }}
          ></input>
        </div>

        <div className="footer">
          <button onClick={addsong()}>Add</button>
          <button onClick={() => closeModal(true)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
