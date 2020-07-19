import React from 'react';
import styled from '@emotion/styled';

const Typography1 = (props) => {
  return <Typography1Styled {...props}>{props.text}</Typography1Styled>;
};

const Typography1Styled = styled.h2`
  font-size: ${(props) => `${props.fontSize}px`};
  line-height: ${(props) => `${props.lineHeight}px`};
  margin-bottom: ${(props) => `${props.marginBottom}px`};
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
  ${({ theme }) => theme.font.bold};
  color: ${({ theme }) => theme.colors.black};
  ${(props) => (props.bold ? props.theme.font.bold : props.theme.font.light)};
`;

export default Typography1;
