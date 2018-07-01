import React from 'react';

import Logo from '../components/Logo/Logo';
import Menu from '../components/Menu/Menu';

const Header = () => (
  <header>
    <Logo />
    <Menu />
    <button>Search</button>
  </header>
);

export default Header;
