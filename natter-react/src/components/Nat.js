import React from "react";
import { Link } from "react-router-dom";
import "./Nat.css";

const Nat = ({ author, text, handleUserClick }) => {
  return (
    <div className="nat">
      <p className="author">
        <Link to={`/Profile/${author}`}>@{author}</Link>
      </p>
      <p className="text">{text}</p>
    </div>
  );
};

export default Nat;
