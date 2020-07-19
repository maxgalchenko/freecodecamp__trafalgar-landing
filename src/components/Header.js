import React from 'react';
import styled from '@emotion/styled';
import Logo from './ui/Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <HeaderStyled id='header'>
      <Logo />
      <Navigation />
    </HeaderStyled>
  );
};
const HeaderStyled = styled.header`
  ${({ theme }) => theme.flex.between};
  padding: 56px 0 20px 0;
  position: fixed;
  width: 100%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  max-width: 95%;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.white};

  ${({ theme }) => theme.mediaDesktop} {
    max-width: 1220px;
  }
`;

export default Header;
