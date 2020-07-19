import React from 'react';
import styled from '@emotion/styled';
import Logo from './ui/Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <HeaderStyled>
      <Logo />
      <Navigation />
    </HeaderStyled>
  );
};
const HeaderStyled = styled.header`
  ${({ theme }) => theme.flex.between};
  max-width: 1220px;
  margin: 0 auto;
  padding-top: 56px;
`;

export default Header;
