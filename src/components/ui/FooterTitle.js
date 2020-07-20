import React from 'react';
import Typography1 from './Typography1';

const FooterTitle = (props) => {
  return (
    <Typography1
      {...props}
      fontSize='20'
      lineHeight='60'
      as='h3'
      color='white'
      bold
    />
  );
};

export default FooterTitle;
