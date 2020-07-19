import React from 'react';
import styled from '@emotion/styled';
import LayoutImgAndContent from './layouts/LayoutImgAndContent';
import Button from './ui/Button';
import Typography1 from './ui/Typography1';
import heroImg from '../images/heroImg.png';
import dotsImg from '../images/dots.png';

const Hero = () => {
  return (
    <HeroStyled>
      <LayoutImgAndContent
        left={
          <div className='content'>
            <Typography1
              text='Virtual healthcare for you'
              fontSize='48'
              marginBottom='45'
              lineHeight='56'
              bold
            />
            <Typography1
              text='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone'
              fontSize='21'
              lineHeight='32'
              opacity='0.5'
              as='p'
              marginBottom='45'
            />
            <Button title='Consult today' blue />
          </div>
        }
        right={<img src={heroImg} />}
      ></LayoutImgAndContent>
    </HeroStyled>
  );
};

const HeroStyled = styled.section`
  padding-top: 175px;
  margin-bottom: 190px;
  position: relative;
  z-index: 1;

  &:after {
    content: '';
    position: absolute;
    background-image: url(${dotsImg});
    left: -64px;
    top: 160px;
    width: 135px;
    height: 115px;
    z-index: 2;
  }

  .content {
    max-width: 445px;
    margin-right: 30px;
  }
`;

export default Hero;
