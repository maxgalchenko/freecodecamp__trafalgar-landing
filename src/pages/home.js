import React from 'react';
import Hero from '../components/Hero';
import OurServices from '../components/OurServices';
import LeadingHealthcare from '../components/LeadingHealthcare';
import CustomersComments from '../components/CustomersComments';
import LatestArticles from '../components/LatestArticles';
import styled from '@emotion/styled';

const Home = () => {
  return (
    <HomeStyled>
      <Hero />
      <OurServices />
      <LeadingHealthcare />
      <CustomersComments />
      <LatestArticles />
    </HomeStyled>
  );
};

const HomeStyled = styled.div`
  position: relative;
  padding-bottom: 200px;

  &::after {
    ${({ theme }) => theme.styles.dots};
    content: '';
    bottom: -50px;
    right: 90px;
    opacity: 0.3;
  }
`;

export default Home;
