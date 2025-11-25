import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; 2025 Tahmid Ahmed | All Rights Reserved</p>
  </FooterContainer>
);

export default Footer;
