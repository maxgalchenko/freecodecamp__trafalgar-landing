import React from 'react';
import styled from '@emotion/styled';
import MainLayout from './MainLayout';

const LayoutImgAndContent = ({ left, right }) => {
  return (
    <MainLayout>
      <LayoutImgAndContentStyled>
        {left}
        {right}
      </LayoutImgAndContentStyled>
    </MainLayout>
  );
};

const LayoutImgAndContentStyled = styled.section`
  ${({ theme }) => theme.flex.between};
`;

export default LayoutImgAndContent;
