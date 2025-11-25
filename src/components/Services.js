import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  background-color: #1f1f1f;
  color: white;
  padding: 3rem;
  text-align: center;
`;

const ServiceCard = styled.div`
  background-color: #333;
  padding: 1rem;
  margin: 1rem;
  display: inline-block;
  width: 200px;
  border-radius: 8px;
`;

const Services = () => (
  <ServicesContainer>
    <h2>Our Services</h2>
    <div>
      <ServiceCard>
        <h3>Web Development</h3>
        <p>Building modern websites using cutting-edge technologies.</p>
      </ServiceCard>
      <ServiceCard>
        <h3>App Development</h3>
        <p>Creating mobile applications that work seamlessly.</p>
      </ServiceCard>
      <ServiceCard>
        <h3>UI/UX Design</h3>
        <p>Designing intuitive user interfaces with excellent user experience.</p>
      </ServiceCard>
    </div>
  </ServicesContainer>
);

export default Services;
