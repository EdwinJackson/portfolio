import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Section from '../section';
import Image from '../image';
import { SectionHeader, Body, ItemHeader, ItemSubHeader } from '../text';
import { format } from '../../utils/formatDate';

const ExperienceContainer = styled.div`
  margin-bottom: 2rem;
`;

const CompanyInfo = styled.div`
  display: flex;
  margin-bottom: 1rem;
`;

const CompanyLogo = styled(Image)`
  margin-right: 1rem;
`

const TextInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * {
    margin-bottom: 0.5rem;
  }
`;

const BulletList = styled.ul`
  padding-left: 1.5rem;
  margin-top: 1rem;
  list-style-type: disc;

  li {
    padding-left: 0.5rem;
    line-height: 1.5rem;
  }
`;

const Experience = () => (
  <StaticQuery 
    query={graphql`
      {
        allContentfulExperience {
          edges {
            node {
              id
              company
              startDate
              current
              description {
                childMarkdownRemark {
                  rawMarkdownBody
                }
              }
              bullets
              startDate
              logo {
                title
                file {
                  url
                }
              }
            }
          }
        }
      }    
    `} 
    render={({allContentfulExperience}) => {
      // dig into the node object and flatten it
      const experiences = allContentfulExperience.edges.map(({node}) => ({...node}));
      console.log(experiences);
      return (
        <Section>
          <SectionHeader diminished>Experience</SectionHeader>
          {experiences.map(experience => (
            <ExperienceContainer key={experience.id}>
              <CompanyInfo>
                <CompanyLogo 
                  size="medium" 
                  src={experience.logo.file.url} 
                  alt={experience.logo.title} />
                <TextInfo>
                  <ItemHeader>{experience.company}</ItemHeader>
                  <ItemSubHeader>
                    {format(experience.startDate, experience.current)}
                  </ItemSubHeader>
                </TextInfo>
              </CompanyInfo>
              <Body>
                {experience.description.childMarkdownRemark.rawMarkdownBody}
              </Body>
              <BulletList>
                {experience.bullets.map((bullet, index) => (
                  <li key={index}>{bullet}</li>
                ))}
              </BulletList>
            </ExperienceContainer>
          ))}
        </Section>
      )
    }}
  />
);

export default Experience;