import React from 'react';
import styled from '@emotion/styled';

const MainLayout = ({ children }) => {
  return <MainLayoutStyled>{children}</MainLayoutStyled>;
};

const MainLayoutStyled = styled.div`
  padding: 0 40px;

  ${({ theme }) => theme.mediaDesktop} {
    max-width: 1220px;
    margin: 0 auto;
    padding: 0;
  }
`;

export default MainLayout;
