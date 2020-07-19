import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const data = [
    { title: 'Home', href: '/', exact: 'true' },
    { title: 'Find a doctor', href: '/find-a-doctor' },
    { title: 'Apps', href: '/apps' },
    { title: 'Testimonials', href: '/testimonials' },
    { title: 'About us', href: '/about-us' },
  ];

  return (
    <NavigationStyled>
      <ul>
        {data.map(({ href, title }, index) => (
          <li key={index}>
            <NavLink to={href} exact activeClassName='currentLink'>
              {title}
            </NavLink>
          </li>
        ))}
      </ul>
    </NavigationStyled>
  );
};

const NavigationStyled = styled.nav`
  font-size: 18px;
  line-height: 18px;
  ${({ theme }) => theme.font.regular};
  color: '#1F1534';

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  li {
    padding: 0 20px;
  }

  a {
    opacity: 0.5;
  }

  .currentLink {
    opacity: 1;
    ${({ theme }) => theme.font.bold};
  }
`;

export default Navigation;
