import { Link, useMatch, useResolvedPath } from "react-router-dom";
// import React, { useState } from "react";

export default function Navbar() {
  // const [searchTerm, setSearchTerm] = useState("");
  return (
    <nav className="nav">
      <Link to="/" className="Music-title">
        Music
      </Link>
      <ul>
        <input
          type="text"
          placeholder="search"
          // onChange={(event) => {
          //   setSearchTerm(event.target.value);
          // }}
        ></input>
        <button type="submit">submit</button>
        <CustomLink to="/home">Home</CustomLink>
        <CustomLink to="/songs">Songs</CustomLink>
        <CustomLink to="/artists">Artists</CustomLink>
        <CustomLink to="/about">About</CustomLink>
      </ul>
    </nav>
    // {music-db.filter((val)=>{
    //   if(searchTerm==""){
    //     return val
    //   }else if(val.name.toLowerCase().include(searchTerm.toLowerCase()){
    //     return val
    //   })
    // })map(val,key)=>{
    //   return(
    //     <div className="user" key={key}>
    //       <p>{val.name}</p>
    //     </div>
    //   )
    // }}
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
