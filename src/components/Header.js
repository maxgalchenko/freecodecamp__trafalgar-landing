import React from 'react';
import styled from '@emotion/styled';
import Logo from './ui/Logo';
import Navigation from './Navigation';

const Header = () => {
  return (
    <HeaderStyled id='header'>
      <div className='wrap'>
        <Logo />
        <Navigation />
      </div>
    </HeaderStyled>
  );
};
const HeaderStyled = styled.header`
  background: ${({ theme }) => theme.colors.white};
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
  .wrap {
    ${({ theme }) => theme.flex.between};
    padding: 56px 0 20px 0;
    width: 100%;
    max-width: 95%;
    margin:0 auto;
    z-index:inherit;
  }

  ${({ theme }) => theme.mediaDesktop} {
    .wrap {
      max-width: 1220px;
    }
  }
`;

export default Header;
