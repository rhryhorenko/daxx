import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="link">
        Home
      </Link>
    </div>
  );
};

export default Navbar;
