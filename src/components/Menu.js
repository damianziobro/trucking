import React from 'react';
import Link from 'gatsby-link';

const Menu = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">About us</Link>
        </li>
        <li>
          <Link to="/">Services</Link>
        </li>
        <li>
          <Link to="/">News</Link>
        </li>
        <li>
          <Link to="/">Locations</Link>
        </li>
        <li>
          <Link to="/">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
