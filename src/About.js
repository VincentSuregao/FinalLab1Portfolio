import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  background-color: #2d2d2d;
  color: white;
  padding: 3rem;
  text-align: center;
`;

const About = () => (
  <AboutContainer>
    <h2>About Me</h2>
    <p>
      Hi! I'm Vincent Suregao, a passionate web developer specializing in front-end and back-end technologies. I
      strive to create beautiful, user-friendly web applications.
    </p>
  </AboutContainer>
);

export default About;
