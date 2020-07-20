import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

const Logo = (props) => {
  return (
    <LogoStyled to='/' id='header-img' {...props}>
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
  margin-bottom: ${(props) =>
    props.mb ? `${props.mb}px` : 0};

  .logo {
    width: 40px;
    height: 40px;
    background: ${(props) =>
      props.white ? props.theme.colors.white : props.theme.colors.blue};
    color: ${(props) =>
      props.white ? props.theme.colors.blue : props.theme.colors.white};
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
    color: ${(props) =>
      props.white ? props.theme.colors.white : props.theme.colors.darkblue};
  }
`;

export default Logo;
