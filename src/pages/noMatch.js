import React from 'react';
import styled from '@emotion/styled';
import MainLayout from '../components/layouts/MainLayout';

const NoMatch = () => {
  return (
    <NoMatchStyled>
      <MainLayout>
        <h1>Sorry it's just a home landing page...</h1>
      </MainLayout>
    </NoMatchStyled>
  );
};

const NoMatchStyled = styled.div`
  padding-top: 300px;
  font-size: 50px;
  line-height: 100px;
  text-align: center;
  min-height: 100vh;
`;

export default NoMatch;
