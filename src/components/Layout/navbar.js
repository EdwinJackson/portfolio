import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const SideBar = styled.nav`
  position: fixed;
  width: 25vw;
  max-width: 500px;
  height: 100vh;
  padding: 2rem;

  @media (min-width: 1500px) {
    margin-left: calc(40vw - 500px);
  }
`;

const Image = styled.img`
  display: block;
  height: ${props => props.size}rem;
  width: ${props => props.size}rem;
  border-radius: 50%;
  margin: 1rem auto;
  object-fit: cover;
  object-position: top;
`;

const HeaderOne = styled.h1`
  margin: 1rem auto;
  text-align: center;
  font-size: 1.5rem;
  font-family: 'Karla', monospace;
  font-weight: bold;
`;

const Navbar = () => (
  <StaticQuery
    query={graphql`
    {
      allContentfulPerson {
        edges {
          node {
            id
            name
            email
            phone
            image {
              file {
                url
              }
            }
            shortBio {
              childMarkdownRemark {
                rawMarkdownBody
              }
            }
          }
        }
      }
      allContentfulNavigationItem {
        edges {
          node {
            text
            link
          }
        }
      }
    }
    `}
    render={data => {
      const {node: person} = data.allContentfulPerson.edges[0]; // This site is designed to be about a single person
      const {node: navitems} = data.allContentfulNavigationItem.edges.map(({node}) => ({...node}));
      console.log(navitems);
      return (
        <SideBar>
          <Image size={10} src={person.image.file.url} alt="Edwin"/>
          <HeaderOne>{person.name}</HeaderOne>
        </SideBar>
      )
    }}
   />
)

export default Navbar;