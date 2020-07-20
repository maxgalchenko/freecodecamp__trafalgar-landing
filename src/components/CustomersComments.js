import React, { useState } from 'react';
import styled from '@emotion/styled';
import SecondaryLayout from './layouts/SecondaryLayout';
import Typography1 from './ui/Typography1';
// Images
import slideUserImg from '../images/sliderUser.png';
import Separator from './ui/Separator';
import ArrowButton from './ui/ArrowButton';

const CustomersComments = () => {
  const dataSlider = [
    {
      id: 1,
      name: 'Edward Newgate',
      descr: 'Founder Circle',
      text: `“Our dedicated patient engagement app and 
    web portal allow you to access information instantaneously (no tedeous form, long calls, 
    or administrative hassle) and securely”`,
    },
    {
      id: 2,
      name: 'Newgate Edward',
      descr: 'Lorem ipsum dolor sit amet.',
      text:
        '  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti explicabo eum adipisci saepe numquam. Sed velit temporibus voluptatem earum? Omnis.',
    },
    {
      id: 3,
      name: 'Lorem, ipsum dolor.',
      descr: 'Lorem ipsum dolor sit amet.',
      text:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid tenetur blanditiis sapiente vero asperiores libero repudiandae velit expedita nostrum aliquam!',
    },
    {
      id: 4,
      name: 'Lorem, ipsum.',
      descr: 'Lorem ipsum dolor sit.',
      text:
        'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat sint praesentium unde minima ea corrupti provident commodi mollitia aperiam nulla?',
    },
  ];

  const [activeSlider, setActiveSlider] = useState(1);

  const onRight = () => {
    setActiveSlider((activeSlider) => activeSlider + 1);
  };

  const onLeft = () => {
    setActiveSlider((activeSlider) => activeSlider - 1);
  };

  return (
    <SecondaryLayout>
      <CustomersCommentsStyled>
        <div className='sliderList'>
          <Typography1
            text='What our customer are saying'
            marginBottom='25'
            fontSize='36'
            lineHeight='48'
            color='white'
            bold
          />
          <Separator marginBottom='70' color='white' />

          <div className='slider'>
            <div className='left'>
              <img
                src={slideUserImg}
                alt='Edward Newgate'
                style={{ transform: `rotate(${(activeSlider - 1) * 120}deg)` }}
              />
              <div className='nameDesrWrap'>
                <Typography1
                  text={dataSlider[activeSlider - 1].name}
                  fontSize='22'
                  lineHeight='48'
                  color='white'
                  bold
                />
                <Typography1
                  text={dataSlider[activeSlider - 1].descr}
                  fontSize='18'
                  lineHeight='48'
                  color='white'
                  opacity='0.85'
                  as='p'
                />
              </div>
            </div>
            <Typography1
              text={dataSlider[activeSlider - 1].text}
              fontSize='19'
              lineHeight='30'
              color='white'
              opacity='0.9'
              as='p'
            />
          </div>
        </div>
        <div className='sliderList__pagination'>
          <ArrowButton left onClick={onLeft} disabled={activeSlider <= 1} />
          <ul>
            {dataSlider.map((item) => (
              <li
                key={item.id}
                className={item.id === activeSlider ? 'dot activeDot' : 'dot'}
              />
            ))}
          </ul>
          <ArrowButton
            right
            onClick={onRight}
            disabled={activeSlider >= dataSlider.length}
          />
        </div>
      </CustomersCommentsStyled>
    </SecondaryLayout>
  );
};

const CustomersCommentsStyled = styled.section`
  position: relative;
  margin-bottom: 215px;

  &::after {
    content: '';
    ${({ theme }) => theme.styles.dots};
    left: -50px;
    top: 240px;
    z-index: -1;
    opacity: 0.3;
  }

  .sliderList {
    background: linear-gradient(191.49deg, #67c3f3 9.05%, #5a98f2 76.74%);
    padding: 64px 120px 80px;
    border-radius: 24px;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    margin-bottom: 42px;

    &::after {
      content: '';
      ${({ theme }) => theme.styles.dots};
      right: -48px;
      top: -14px;
    }
  }

  .sliderList__pagination {
    display: flex;
    align-items: center;
    justify-content: center;

    ul {
      display: flex;
      align-items: center;
      margin: 0 90px;

      .dot {
        width: 10px;
        height: 10px;
        background: ${({ theme }) => theme.colors.blue};
        opacity: 0.3;
        border-radius: 50%;
        margin-right: 18px;
        &:last-of-type {
          margin: 0;
        }
      }

      .activeDot {
        opacity: 1;
      }
    }
  }

  .slider {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & > p {
      width: 48%;
    }
  }

  .left {
    display: flex;
    align-items: center;
    min-width: 48%;

    .nameDesrWrap {
      text-align: left;
    }

    img {
      border: 5px solid ${({ theme }) => theme.colors.white};
      border-radius: 50%;
      margin-right: 33px;
    }
  }

  h2 {
    text-align: left;
  }
`;

export default CustomersComments;
