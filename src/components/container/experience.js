import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Section from '../section';
import Image from '../image';
import ContentSection from '../content-container';
import { SectionHeader, Body, ItemHeader, ItemSubHeader } from '../text';
import { format } from '../../utils/formatDate';
import unwrap from '../../utils/unwrap';
import { colour } from '../../common/styles';

const ExperienceContainer = styled(ContentSection)`
  &:hover {
    background-color: ${colour.space}05;
  }
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
        allContentfulExperience(sort: {fields: startDate order: DESC}) {
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
      const experiences = unwrap(allContentfulExperience);
      return (
        <Section id="experiences">
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