import React from 'react';
import styled from '@emotion/styled';
// Images
import arrowIcon from '../../images/arrowSlider.png';
import arrowIconLeft from '../../images/arrowSliderLeft.png';

const ArrowButton = (props) => {
  return (
    <ArrowButtonStyled {...props}>
      <img src={props.left ? arrowIconLeft : arrowIcon} alt='arrowBtn' />
    </ArrowButtonStyled>
  );
};

const ArrowButtonStyled = styled.button`
  cursor: pointer;
  border: none;
  background: transparent;

  &:disabled {
    opacity: 0.3;
  }
`;

export default ArrowButton;
