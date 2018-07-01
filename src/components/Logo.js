import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';

import logo from '../assets/logo.png';

const LogoLink = styled(Link)`
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const LogoIcon = styled.img`
  margin: 10px;
`;

const LogoTitleWrapper = styled.div`
  text-align: center;
`;

const LogoTitle = styled.h1`
  margin: 0;
  color: #010101;
  font-weight: 800;
  font-size: 2.6em;
  text-transform: uppercase;
`;

const LogoSubtitle = styled.p`
  margin: 0;
  color: #777777;
  font-size: 1.1em;
`;

const Logo = () => {
  return (
    <LogoLink to="/">
      <LogoIcon src={logo} alt="Trucking logo" />
      <LogoTitleWrapper>
        <LogoTitle>Trucking</LogoTitle>
        <LogoSubtitle>Logisitic &amp; Transporation</LogoSubtitle>
      </LogoTitleWrapper>
    </LogoLink>
  );
};

export default Logo;
