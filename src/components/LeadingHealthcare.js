import React from 'react';
import styled from '@emotion/styled';
import LayoutImgAndContent from './layouts/LayoutImgAndContent';
import Typography1 from './ui/Typography1';
import Separator from './ui/Separator';
import Button from './ui/Button';
// Images
import leadingBg from '../images/leadingBg.png';
import downloadBg from '../images/downloadBg.png';

const LeadingHealthcare = () => {
  return (
    <LeadingHealthcareStyled>
      <LayoutImgAndContent
        left={<img src={leadingBg} alt='' />}
        right={
          <div className='content-wrap'>
            <Typography1
              text='Leading healthcare providers'
              fontSize='36'
              lineHeight='56'
              marginBottom='25'
              bold
            />
            <Separator marginBottom='31' />
            <Typography1
              text='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver'
              fontSize='18'
              lineHeight='30'
              marginBottom='37'
              opacity='0.5'
            />
            <Button title='Learn more' />
          </div>
        }
      />

      <LayoutImgAndContent
        right={<img src={downloadBg} alt='' />}
        left={
          <div className='content-wrap'>
            <Typography1
              text='Download our mobile apps'
              fontSize='36'
              lineHeight='56'
              marginBottom='25'
              bold
            />
            <Separator marginBottom='31' />
            <Typography1
              text='Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
in the solutions we deliver'
              fontSize='18'
              lineHeight='30'
              marginBottom='37'
              opacity='0.5'
            />
            <Button
              title='Download'
              icon={
                <svg
                  width='11'
                  height='16'
                  viewBox='0 0 11 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4.81951 1.05554L4.81951 12.6308L2.27646 10.0877C1.92569 9.73698 1.39954 9.73698 1.04878 10.0877C0.698014 10.4385 0.698014 10.9647 1.04878 11.3154L5.08258 15.3492C5.43335 15.7 5.95949 15.7 6.31026 15.3492L10.3441 11.3154C10.6948 10.9647 10.6948 10.4385 10.3441 10.0877C9.9933 9.73698 9.46715 9.73698 9.11638 10.0877L6.57333 12.6308L6.57333 1.05554C6.57333 0.617083 6.22257 0.178627 5.69642 0.178627C5.17027 0.178627 4.81951 0.617083 4.81951 1.05554Z'
                    fill='#458FF6'
                  />
                </svg>
              }
            />
          </div>
        }
      />
    </LeadingHealthcareStyled>
  );
};

const LeadingHealthcareStyled = styled.section`
  .content-wrap {
    max-width: 450px;
  }

  section {
    margin-bottom: 240px;
  }
`;

export default LeadingHealthcare;
