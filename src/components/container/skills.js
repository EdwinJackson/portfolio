import React from 'react';
import styled from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import Section from '../section';
import { SectionHeader, Body, ItemHeader } from '../text';
import Image from '../image';
import unwrap from '../../utils/unwrap';

const SkillContainer = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const SkillIcon = styled.div`
  display: flex;
`;

const SkillText = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 1rem;
`;

const SkillHeader = styled(ItemHeader)`
  margin-bottom: 0.5rem;
`;

const Skills = () => (
  <StaticQuery
    query={graphql`
      {
        allContentfulSkill(sort: {fields: createdAt, order: ASC}) {
          edges {
            node {
              id
              title
              description
              icon {
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
    render={({allContentfulSkill}) => {
      const skills = unwrap(allContentfulSkill);
      return (
        <Section id="skills">
          <SectionHeader diminished>Skills</SectionHeader>
          <Body></Body>
          {skills.map(skill => (
            <SkillContainer key={skill.id}>
              <SkillIcon>
                <Image 
                  size="small" 
                  src={skill.icon.file.url} 
                  alt={skill.icon.title} />
              </SkillIcon>
              <SkillText>
                <SkillHeader>{skill.title}</SkillHeader>
                <Body>{skill.description}</Body>
              </SkillText>
            </SkillContainer>
          ))}
        </Section>
      )
    }}
  />
)

export default Skills;