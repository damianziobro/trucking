import React from 'react';
import Link from 'gatsby-link';

const Header = ({ siteTitle }) => (
  <header>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </header>
);

export default Header;
