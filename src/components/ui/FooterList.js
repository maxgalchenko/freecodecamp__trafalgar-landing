import React from 'react';
import styled from '@emotion/styled';
import Typography1 from './Typography1';
import { Link } from 'react-router-dom';

const FooterList = ({ data }) => {
  return (
    <FooterListStyled>
      {data.map((item, index) => (
        <Link to='/' key={index}>
          <Typography1
            text={item.name}
            fontSize='18'
            lineHeight='38'
            color='white'
            text={item}
            as='li'
          />
        </Link>
      ))}
    </FooterListStyled>
  );
};

const FooterListStyled = styled.ul`
  li {
    transition: all 0.3s ease-out;
    cursor: pointer;

    &:hover,
    &:active {
      color: #fc85ae;
    }
  }
`;

export default FooterList;
