import React from "react";
import Modal from "../components/Modal";
import { useState } from "react";
function Songs() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
      <button
        className="btn-add"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        +Add song
      </button>
      {openModal && <Modal closeModal={setOpenModal} />}
      <table className="song-table">
        <tbody>
          <tr>
            <th>name</th>
            <th>dob</th>
            <th>bio</th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Songs;
