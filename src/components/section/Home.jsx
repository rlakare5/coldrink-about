// src/components/section/Home.jsx
import React from 'react';

const Home = () => (
  <section style={styles.container}>
    <div style={styles.content}>
      <h1 style={styles.title}>ChillFizz</h1>
      <p style={styles.subtitle}>Refreshing your world, one fizz at a time.</p>
      <button style={styles.button}>Explore More</button>
    </div>
  </section>
);

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #00bcd4, #1de9b6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    scrollSnapAlign: 'start',
    padding: '2rem',
    color: '#fff',
    textAlign: 'center',
  },
  content: {
    maxWidth: '700px',
  },
  title: {
    fontSize: '4rem',
    fontFamily: 'Kumbh Sans, sans-serif',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    fontFamily: 'Montserrat, sans-serif',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.8rem 1.8rem',
    fontSize: '1rem',
    backgroundColor: '#fff',
    color: '#00bcd4',
    border: 'none',
    borderRadius: '999px',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
};

export default Home;
