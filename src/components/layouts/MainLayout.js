import React from 'react';
import styled from '@emotion/styled';

const MainLayout = ({ children }) => {
  return <MainLayoutStyled>{children}</MainLayoutStyled>;
};

const MainLayoutStyled = styled.div`
  ${({ theme }) => theme.mediaDesktop} {
    max-width: 1120px;
    margin: 0 auto;
  }
`;

export default MainLayout;
