import React from 'react';
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>Pavithra Boopathi</h1>
      </div>
      <div className="navbar">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/project" className="nav-link">/Project</Link>
        <Link to="/article" className="nav-link">/Article</Link>
        <Link to="/contact" className="nav-link">/Contact</Link>
      </div>
      
      
    </div>
  );
};
