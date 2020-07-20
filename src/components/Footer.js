import React from 'react';
import styled from '@emotion/styled';
import MainLayout from './layouts/MainLayout';
import Logo from './ui/Logo';
import Typography1 from './ui/Typography1';
import FooterTitle from '../components/ui/FooterTitle';
import FooterList from './ui/FooterList';

const Footer = () => {
  const dataList1 = ['About', 'Testimonials', 'Find a doctor', 'Apps'];
  const dataList2 = ['Indonesia', 'Singapore', 'Hongkong', 'Canada'];
  const dataList3 = [
    'Help center',
    'Contact support',
    'Instructions',
    'How it works',
  ];

  return (
    <FooterStyled>
      <MainLayout>
        <div className='column1'>
          <Logo mb='17' white='true' />
          <Typography1
            as='p'
            marginBottom='31'
            fontSize='18'
            lineHeigth='28'
            color='white'
            text='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone'
          />
          <Typography1
            as='small'
            marginBottom='31'
            fontSize='18'
            lineHeigth='28'
            color='white'
            text='©Trafalgar PTY LTD 2020. All rights reserved'
          />
        </div>
        <div className='column2'>
          <FooterTitle text='Company' />
          <FooterList data={dataList1} />
        </div>
        <div className='column3'>
          <FooterTitle text='Region' />
          <FooterList data={dataList2} />
        </div>
        <div className='column4'>
          <FooterTitle text='Help' />
          <FooterList data={dataList3} />
        </div>
      </MainLayout>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  background: linear-gradient(180.92deg, #67c3f3 -8.57%, #5a98f2 82.96%);
  position: relative;
  padding: 120px 0;
  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &::after {
    content: '';
    ${({ theme }) => theme.styles.dots};
    bottom: 0;
    left: -30px;
  }

  .column1 {
    max-width: 390px;
  }
`;

export default Footer;
