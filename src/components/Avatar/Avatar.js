import React from "react";
import "./Avatar.css";


const Avatar = ({src , size:{width , height}}) => {
  return (
    <div className="avatar-container">
      <img
       src={src}
      alt="Avatar"
      style={{ width: `${width}px`, height: `${height}px` }}
      className="avatar"
      />
    
    </div>
  );
};

export default Avatar;
