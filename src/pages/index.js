import React from 'react';
import Layout from '../components/Layout';
import About from '../components/container/about';
import Experience from '../components/container/experience';
import Skills from '../components/container/skills';

const HomePage = () => (
  <Layout>
    <About />
    <Experience />
    <Skills />
  </Layout>
);

export default HomePage;
