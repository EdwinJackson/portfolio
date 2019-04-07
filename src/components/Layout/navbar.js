import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Image from '../image';

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

const Headshot = styled(Image)`
  display: block;
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
      contentfulPerson(id: {eq: "3c56de93-d279-5889-8563-5298ad412080"}) {
        name
        title
        email
        phone
        github
        image {
          description
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
      const person = data.contentfulPerson;
      const navitems = data.allContentfulNavigationItem.edges.map(({node}) => ({...node}));
      console.log(navitems);
      return (
        <SideBar>
          <Headshot size="large" src={person.image.file.url} alt="Edwin"/>
          <HeaderOne>{person.name}</HeaderOne>
        </SideBar>
      )
    }}
   />
)

export default Navbar;