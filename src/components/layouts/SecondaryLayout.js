import React from 'react';
import styled from '@emotion/styled';

const SecondaryLayout = ({ children }) => {
  return <SecondaryLayoutStyled>{children}</SecondaryLayoutStyled>;
};

const SecondaryLayoutStyled = styled.div`
  padding: 0 40px;

  ${({ theme }) => theme.mediaDesktop} {
    max-width: 1100px;
    margin: 0 auto;
    padding: 0;
  }
`;

export default SecondaryLayout;
