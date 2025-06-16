// src/components/section/About.jsx
import React from 'react';

const About = () => (
  <section style={styles.section}>
    <div style={styles.container}>
      <div style={styles.textContent}>
        <h2 style={styles.heading}>About ChillFizz</h2>
        <p style={styles.description}>
          ChillFizz is not just a cold drink — it's a sensation. Made with real fruit extracts, zero artificial nonsense, and a fizz that brings instant refreshment. We're on a mission to add sparkle to every sip.
        </p>
        <p style={styles.highlight}>
          Available in over 20 countries and loved by millions!
        </p>
      </div>
      <div style={styles.imageWrapper}>
        <img
          src="https://images.unsplash.com/photo-1612198733676-36a340e17380?auto=format&fit=crop&w=800&q=80"
          alt="ChillFizz bottle"
          style={styles.image}
        />
      </div>
    </div>
  </section>
);

const styles = {
  section: {
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4rem 2rem',
    scrollSnapAlign: 'start',
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    maxWidth: '1200px',
    width: '100%',
    gap: '2rem',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContent: {
    flex: '1 1 500px',
  },
  heading: {
    fontSize: '2.5rem',
    fontFamily: 'Kumbh Sans, sans-serif',
    marginBottom: '1rem',
    color: '#333',
  },
  description: {
    fontSize: '1.1rem',
    fontFamily: 'Montserrat, sans-serif',
    lineHeight: '1.6',
    color: '#555',
  },
  highlight: {
    marginTop: '1rem',
    fontWeight: '600',
    color: '#00bcd4',
  },
  imageWrapper: {
    flex: '1 1 400px',
    textAlign: 'center',
  },
  image: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '1rem',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
  },
};

export default About;
