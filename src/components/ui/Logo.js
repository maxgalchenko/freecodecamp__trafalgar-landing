import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <LogoStyled to='/'>
      <span className='logo' />
      <span className='text'>Trafalgar</span>
    </LogoStyled>
  );
};

const LogoStyled = styled(Link)`
  display: inline-flex;
  align-items: center;
  ${({ theme }) => theme.font.bold};
  font-size: 24px;
  line-height: 24px;

  .logo {
    width: 40px;
    height: 40px;
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
    margin-right: 12px;
    border-radius: 50%;
    position: relative;

    &:after {
      content: 'T';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-45%);
    }
  }

  .text {
    color: ${({ theme }) => theme.colors.darkblue};
  }
`;

export default Logo;
