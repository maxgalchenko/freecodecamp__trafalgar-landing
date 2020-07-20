import React from 'react';
import styled from '@emotion/styled';

const Separator = ({ marginBottom, color }) => {
  return <SeparatorStyles marginBottom={marginBottom} color={color} />;
};

const SeparatorStyles = styled.div`
  height: 2px;
  width: 56px;
  background: ${(props) =>
    props.color ? props.color : props.theme.colors.black};
  margin-bottom: ${(props) => `${props.marginBottom}px`};
`;

export default Separator;
