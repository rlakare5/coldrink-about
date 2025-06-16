// src/components/section/Pricing.jsx
import React from 'react';

const Pricing = () => (
  <section style={styles}>
    <h1>Pricing</h1>
    <p>Affordable fizz for everyone — check out our plans.</p>
  </section>
);

const styles = {
  minHeight: '100vh',
  padding: '4rem',
  backgroundColor: '#4caf50',
  color: 'white',
  textAlign: 'center',
};

export default Pricing;