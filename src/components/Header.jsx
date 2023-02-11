import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <Link to='/'>
      <h1>Tyler Jensen</h1>
      </Link>
      <nav>
        <Link to='/about'>About</Link>
        <Link to='/skills'>Skills</Link>
        <Link to='/projects'>Projects</Link>
      </nav>
    </div>
  );
};

export default Header