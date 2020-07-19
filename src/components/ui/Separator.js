import React from 'react';
import styled from '@emotion/styled';

const Separator = ({ marginBottom }) => {
  return <SeparatorStyles marginBottom={marginBottom} />;
};

const SeparatorStyles = styled.div`
  height: 2px;
  width: 56px;
  background: ${({ theme }) => theme.colors.black};
  margin-bottom: ${(props) => `${props.marginBottom}px`};
`;

export default Separator;
