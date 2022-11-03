import React, { useState } from "react";
import Axios from "axios";
import Songdata from "../components/AddSong";

export default function Userdata() {
  const [user, setuser] = useState("");
  const [email, setemail] = useState("");

  const userinfo = () => {
    Axios.post("http://localhost:3006/adduser", {
      user: user,
      email: email,
    }).then(() => {
      console.log("Sucess");
    });
  };

  Songdata(user, email);

  return (
    <div>
      <h1>Adding user</h1>
      <label>user</label>
      <input
        type="text"
        onChange={(event) => {
          setuser(event.target.value);
        }}
      ></input>
      <label>email</label>
      <input
        type="text"
        onChange={(event) => {
          setemail(event.target.value);
        }}
      ></input>
      <button onClick={userinfo}>add</button>
    </div>
  );
}
