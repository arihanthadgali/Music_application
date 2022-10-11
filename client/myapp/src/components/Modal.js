import React from "react";
import "./songs.css";

function Modal(closeModal) {
  return (
    <div className="modalbackground">
      <div className="modalContainer">
        <button onClick={() => closeModal(false)}>X</button>
        <div className="title">
          <h1>Adding a new song</h1>
        </div>
        <div className="body">
          Song Name: <input type="text" name="song"></input>
          <br />
          Date Released: <input type="date" name="date"></input>
          <br />
          Art work: <input type="image-alt" name="image"></input>
        </div>

        <div className="footer">
          <button>Add</button>
          <button onClick={() => closeModal(true)}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
