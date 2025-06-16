// src/components/section/SingleBlog.jsx
import React from 'react';

const SingleBlog = () => (
  <section style={styles}>
    <h1>Single Blog</h1>
    <p>One fizz story, in full detail – enjoy the read!</p>
  </section>
);

const styles = {
  minHeight: '100vh',
  padding: '4rem',
  backgroundColor: '#3f51b5',
  color: 'white',
  textAlign: 'center',
};

export default SingleBlog;