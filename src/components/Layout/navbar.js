import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';
import Image from '../image';
import { space, colour } from '../../common/styles';

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

const Navigation = styled.ul`
  width: 100px;
  margin: 4rem auto;
  list-style-type: none;

  li {
    position: relative;
    margin-bottom: 1.5rem;
    font-family: 'Karla', sans-serif;
    font-size: 1.25;
    font-weight: bold;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 1rem;
      height: 3px;
      margin-bottom: -5px;
      background: ${colour.powder};
      transition: ease-in 100ms all;
    }

    &:hover {
      &::before {
        width: 4rem;
        background: ${colour.pale};        
      }
    }
  }

  a {
    color: ${colour.black};
    text-decoration: none;
  }
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
      allContentfulNavigationItem(sort: {fields: createdAt, order: ASC}) {
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
      return (
        <SideBar>
          <Headshot size="large" src={person.image.file.url} alt="Edwin"/>
          <HeaderOne>{person.name}</HeaderOne>
          <Navigation>
            {navitems.map(item => (
              <li key={item.link}>
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </Navigation>
        </SideBar>
      )
    }}
   />
)

export default Navbar;