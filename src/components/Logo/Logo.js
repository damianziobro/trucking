import React from 'react';
import Link from 'gatsby-link';

import logo from '../../assets/logo.png';

const Logo = () => {
  return (
    <Link to="/">
      <img src={logo} alt="Trucking logo" />
      <h1>Trucking</h1>
      <p>Logisitic &amp; Transporation</p>
    </Link>
  );
};

export default Logo;
