import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Section from '../Layout/section';
import { SectionHeader, Body } from '../../common/text';

const About = () => (
  <StaticQuery 
    query={graphql`
      {
        contentfulPerson(id: {eq: "3c56de93-d279-5889-8563-5298ad412080"}) {
          shortBio {
            childMarkdownRemark {
              rawMarkdownBody
            }
          }
        }
      }
    `} 
    render={({contentfulPerson}) => (
      <Section>
        <SectionHeader diminished>About</SectionHeader>
        <Body>{contentfulPerson.shortBio.childMarkdownRemark.rawMarkdownBody}</Body>
      </Section>
    )}
  />
);

export default About;