import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

const MenuList = styled.ul`
  padding: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`;

const MenuLink = styled(Link)`
  padding: 27px;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.3em;
  color: #333333;
  font-weight: 700;
  border-bottom: 8px solid transparent;
  transition: 0.2s;

  &:hover {
    border-bottom-color: #006db7;
  }
`;
const Menu = () => {
  return (
    <nav>
      <MenuList>
        <li>
          <MenuLink to="/">Home</MenuLink>
        </li>
        <li>
          <MenuLink to="/">About us</MenuLink>
        </li>
        <li>
          <MenuLink to="/">Services</MenuLink>
        </li>
        <li>
          <MenuLink to="/">News</MenuLink>
        </li>
        <li>
          <MenuLink to="/">Locations</MenuLink>
        </li>
        <li>
          <MenuLink to="/">Contact</MenuLink>
        </li>
      </MenuList>
    </nav>
  );
};

export default Menu;
