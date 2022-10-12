import React from "react";
import Modal from "../components/Modal";
import { useState } from "react";
function Songs() {
  const [openModal, setModal] = useState(false);
  return (
    <div>
      <button
        className="btn-add"
        onClick={() => {
          setModal(true);
        }}
      >
        +Add song
      </button>
      {openModal && <Modal closeModal={setModal} />}
      <table className="song-table">
        <tr>
          <th>cover</th>
          <th>Song</th>
          <th>Date of Release</th>
        </tr>
      </table>
    </div>
  );
}

export default Songs;
