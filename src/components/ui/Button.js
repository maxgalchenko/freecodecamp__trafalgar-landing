import React from 'react';
import styled from '@emotion/styled';

const Button = ({ blue, title, icon }) => {
  return (
    <ButtonStyled blue={blue}>
      {title}
      {icon}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  height: 56px;
  padding: 0 40px;
  background: ${(props) =>
    props.blue ? props.theme.colors.blue : 'transparent'};
  border: ${(props) =>
    props.blue ? 'none' : `1px solid ${props.theme.colors.blue}`};
  color: ${(props) =>
    props.blue ? props.theme.colors.white : props.theme.colors.blue};
  font-size: 18px;
  line-height: 18px;
  ${({ theme }) => theme.font.bold};
  border-radius: 55px;
  ${({ theme }) => theme.flex.center};

  svg, img {
    margin-left: 10px;
  }
`;

export default Button;
