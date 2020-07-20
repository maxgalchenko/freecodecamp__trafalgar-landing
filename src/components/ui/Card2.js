import React from 'react';
import styled from '@emotion/styled';
import Typography1 from './Typography1';

const Card2 = ({ img, title, descr }) => {
  return (
    <Card2Styled>
      <img src={img} alt='' />
      <div className='card__bottom'>
        <Typography1
          text={title}
          fontSize='21'
          lineHeight='32'
          bold
          as='h3'
          marginBottom='12'
        />
        <Typography1
          text={descr}
          fontSize='16'
          lineHeight='28'
          as='p'
          opacity='0.5'
          marginBottom='25'
        />
        <button>
          Read more{' '}
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
        </button>
      </div>
    </Card2Styled>
  );
};

const Card2Styled = styled.li`
  box-shadow: 10px 40px 50px rgba(229, 233, 246, 0.4);
  max-width: 350px;
  border-radius: 20px;
  z-index: 2;

  .card__bottom {
    padding: 24px 33px 35px 33px;
    background-color: ${({ theme }) => theme.colors.white};

    button {
      color: ${({ theme }) => theme.colors.blue};
      font-size: 17px;
      line-height: 28px;
      background: transparent;
      border: none;
      font-weight: 500;
      ${({ theme }) => theme.flex.center};
      cursor: pointer;

      svg {
        transform: rotate(-90deg);
        margin-left: 12px;
      }
    }
  }

`;

export default Card2;
