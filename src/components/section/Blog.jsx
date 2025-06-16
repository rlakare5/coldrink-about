// src/components/section/Blog.jsx
import React from 'react';

const Blog = () => (
  <section style={styles}>
    <h1>Blog</h1>
    <p>Read our latest stories, behind-the-scenes, and fizz-filled updates.</p>
  </section>
);

const styles = {
  minHeight: '100vh',
  padding: '4rem',
  backgroundColor: '#673ab7',
  color: 'white',
  textAlign: 'center',
};

export default Blog;