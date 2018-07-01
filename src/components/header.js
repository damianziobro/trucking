import React from 'react';
import styled from 'styled-components';

import Logo from '../components/Logo';
import Menu from '../components/Menu';

const SearchButton = styled.button``;

const Header = () => (
  <header>
    <Logo />
    <Menu />

    <SearchButton>Search</SearchButton>
  </header>
);

export default Header;
