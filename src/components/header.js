import React from 'react';
import styled from 'styled-components';

import searchIcon from '../assets/search-icon.png';

import Logo from '../components/Logo';
import Menu from '../components/Menu';
import Wrapper from '../components/Wrapper';

const HeaderBackground = styled.div`
  background-color: #122636;
`;

const HeaderStyled = styled.header`
  margin: 30px;
  padding: 10px 30px;
  background-color: #ffffff;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  border-radius: 3px;

  @media (max-width: 920px) {
    margin: 10px auto;
    width: 80%;
  }
`;

const SearchButton = styled.button`
  background-color: #006db7;
  width: 38px;
  height: 38px;
  border: 0;
  border-radius: 20px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    opacity: 0.8;
  }

  @media (max-width: 920px) {
    width: 10%;
    order: -1;
  }
`;

const Header = () => (
  <HeaderBackground>
    <Wrapper>
      <HeaderStyled>
        <Logo />
        <Menu />
        <SearchButton>
          <img src={searchIcon} />
        </SearchButton>
      </HeaderStyled>
    </Wrapper>
  </HeaderBackground>
);

export default Header;
