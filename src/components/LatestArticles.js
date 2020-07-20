import React from 'react';
import styled from '@emotion/styled';
import SecondaryLayout from './layouts/SecondaryLayout';
import Typography1 from './ui/Typography1';
import Separator from './ui/Separator';
import Card2 from './ui/Card2';
import Button from './ui/Button';
// Images
import { img1, img2, img3 } from '../images/card2images';
import imgBg from '../images/ourServicesBg.png';

const LatestArticles = () => {
  const data = [
    {
      img: img1,
      title: 'Disease detection, check up in the laboratory',
      descr:
        'In this case, the role of the health laboratory is very important to doa disease detection...',
    },
    {
      img: img2,
      title: 'Herbal medicines that are safe for consumption',
      descr:
        'Herbal medicine is very widely used at this time because of its very good for your health...',
    },
    {
      img: img3,
      title: 'Natural care for healthy facial skin',
      descr:
        'A healthy lifestyle should start from now and also for your skin health. There are some...',
    },
  ];

  return (
    <LatestArticlesStyled>
      <SecondaryLayout>
        <Typography1
          text='Check out our latest article'
          fontSize='36'
          lineHeight='56'
          marginBottom='26'
          bold
        />
        <Separator marginBottom='79' />

        <ul>
          {data.map((item, index) => (
            <Card2 {...item} key={index} />
          ))}
        </ul>

        <Button title='View all' />
      </SecondaryLayout>
    </LatestArticlesStyled>
  );
};

const LatestArticlesStyled = styled.section`
  overflow: hidden;

  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      background-image: url(${imgBg});
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      opacity: 0.6;
      width: 770px;
      height: 560px;
      z-index: -1;
      right: -450px;
      top: 74px;
      transform: rotate(170deg);
    }
  }

  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 70px;

    li {
      margin-right: 20px;
      &::not(:nth-of-type(3n)) {
        margin-right: 0;
      }
    }
  }
`;

export default LatestArticles;
