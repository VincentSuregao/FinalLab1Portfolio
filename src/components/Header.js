import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #1f1f1f;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const Header = () => (
  <HeaderContainer>
    <h1>Vincent Suregao</h1>
    <p>Full Stack Developer</p>
    <Link to="/about">About Me</Link> | <Link to="/services">Services</Link>
  </HeaderContainer>
);

export default Header;
