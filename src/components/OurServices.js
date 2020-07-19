import React from 'react';
import Typography1 from './ui/Typography1';
import styled from '@emotion/styled';
import Separator from './ui/Separator';
import SecondaryLayout from './layouts/SecondaryLayout';
import {
  consultation,
  emergency,
  info,
  pharmacy,
  tracking,
  search,
} from '../images/cardIcons';
import Card from './ui/Card';
import Button from './ui/Button';

const OurServices = () => {
  const data = [
    {
      img: search,
      text1: 'Search doctor',
      text2:
        'Choose your doctor from thousands of specialist, general, and trusted hospitals',
    },
    {
      img: pharmacy,
      text1: 'Online pharmacy',
      text2:
        'Buy  your medicines with our mobile application with a simple delivery system',
    },
    {
      img: consultation,
      text1: 'Consultation',
      text2:
        'Free consultation with our trusted doctors and get the best recomendations',
    },
    {
      img: info,
      text1: 'Details info',
      text2:
        'Free consultation with our trusted doctors and get the best recomendations',
    },
    {
      img: emergency,
      text1: 'Emergency care',
      text2:
        'You can get 24/7 urgent care for yourself or your children and your lovely family',
    },
    {
      img: tracking,
      text1: 'Tracking',
      text2: 'Track and save your medical history and health data',
    },
  ];
  return (
    <OurServicesStyled>
      <SecondaryLayout>
        <div className='text-wrap'>
          <Typography1
            text='Our services'
            fontSize='36'
            lineHeight='56'
            marginBottom='26'
            bold
          />
          <Separator marginBottom='33' />
          <Typography1
            text='We provide to you the best choiches for you. Adjust it to your health
      needs and make sure your undergo treatment with our highly qualified
      doctors you can consult with us which type of service is suitable for your
      health'
            fontSize='18'
            lineHeight='30'
            marginBottom='80'
            as='p'
          />
        </div>
        <ul>
          {data.map((item, index) => (
            <Card {...item} key={index} />
          ))}
        </ul>
        <Button title='Learn more' />
      </SecondaryLayout>
    </OurServicesStyled>
  );
};

const OurServicesStyled = styled.section`
  .text-wrap {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    padding: 0 85px;
  }

  ul {
    ${({ theme }) => theme.flex.between};
    margin-bottom: 70px;
    flex-wrap: wrap;
    li {
      max-width: 350px;
    }
  }

  button {
    margin: 0 auto 220px auto;
  }
`;

export default OurServices;
