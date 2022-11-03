import React, { useState } from "react";
import AddArtist from "../components/AddArtist";

function Artists() {
  const [artist, setartist] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setartist(true);
        }}
      >
        Add Artist
      </button>
      <br />
      {artist && <AddArtist closeartist={setartist} />}
    </div>
  );
}

export default Artists;
