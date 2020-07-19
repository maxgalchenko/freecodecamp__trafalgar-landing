import React from 'react';
import styled from '@emotion/styled';
import Typography1 from './Typography1';

const Card = ({ text1, text2, img, imgMarginBottom }) => {
  return (
    <CardStyled imgMarginBottom={imgMarginBottom}>
      <div className='img-wrap'>
        <img src={img} alt={text1} />
      </div>

      <Typography1 text={text1} fontSize='24' lineHeight='56' bold />
      <Typography1 text={text2} fontSize='16' lineHeight='28' />
    </CardStyled>
  );
};

const CardStyled = styled.li`
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.white};
  padding: 54px 40px 45px;
  box-sizing: border-box;

  .img-wrap {
    height: 120px;
    img {
      margin-bottom: 25px;
    }
  }
`;

export default Card;
