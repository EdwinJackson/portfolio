import React from 'react';
import Layout from '../components/Layout';
import About from '../components/container/about';
import Experience from '../components/container/experience';

const HomePage = () => (
  <Layout>
    <About id="about" />
    <Experience id="experience" />
  </Layout>
);

export default HomePage;
