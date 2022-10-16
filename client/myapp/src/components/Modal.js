import React, { useState } from "react";
import "./songs.css";
import Axios from "axios";

function Modal({ closeModal }) {
  const [name, setname] = useState("");
  const [dob, setdob] = useState(0);
  const [bio, setbio] = useState("");

  const addsong = () => {
    Axios.post("http://localhost:3006/add", {
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
        <button onClick={() => closeModal(false)}>X</button>
        <div className="title">
          <h1>Adding a new song</h1>
        </div>
        <div className="body">
          Name:{" "}
          <input
            type="text"
            aria-label="name"
            onChange={(event) => {
              setname(event.target.value);
            }}
          ></input>
          <br />
          DOB:{" "}
          <input
            type="date"
            aria-label="dob"
            onChange={(event) => {
              setdob(event.target.value);
            }}
          ></input>
          <br />
          bio:{" "}
          <input
            type="image-alt"
            aria-label="bio"
            onChange={(event) => {
              setbio(event.target.value);
            }}
          ></input>
        </div>

        <div className="footer">
          <button onClick={addsong()}>Add</button>
          <button onClick={() => closeModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
