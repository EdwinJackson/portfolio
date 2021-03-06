import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import styled, { css } from 'styled-components';
import Image from '../image';
import { space, colour, media, images } from '../../common/styles';
import unwrap from '../../utils/unwrap';
import X from '../x';

const SideBar = styled.nav`
  position: fixed;
  width: ${space.sidebar};
  max-width: ${space.sidebarMax};
  height: 100vh;
  padding: 2rem;

  ${media.desktopLarge} {
    margin-left: calc(40vw - 500px);
  }

  ${media.tablet} {
    ${
      props => props.open ? 
        css`
          background: ${colour.white};
          width: 100%;
          height: 100%;
          padding: 0;
          padding-top: 70%;
          animation-name: open;
          animation-duration: 300ms;
          animation-timing-function: linear;

          @keyframes open {
            0% {
              width: 0%;
            }
            50% {
              width: 100%;
            }
            75% {
              padding: 2rem;
            }
            100% {
              padding: 0;
            }
          }
        ` : ``
    }
    h1 {
      display: ${props => props.open ? 'block' : 'none'};      
    }
  }
`;

const Headshot = styled(Image)`
  display: block;
  padding: 0.5rem;
  border: solid 0.25rem ${colour.powder};
  border-radius: 50%;
  margin: 1rem auto;
  object-fit: cover;
  object-position: top;

  &:hover {
    border-color: ${colour.pale};
  }

  ${media.tablet} {
    position: fixed;
    bottom: 2%;
    right: 4%;
    width: ${images.medium};
    height: ${images.medium};
    padding: 0.25rem;

    ${
      props => props.open ?
        css`
          animation-duration: 300ms;
          animation-name: headshotSlide;
          animation-timing-function: linear;
          animation-fill-mode: forwards;

          @keyframes headshotSlide {
            from {
              bottom: 2%;
              right: 4%;
              width: ${images.medium};
              height: ${images.medium};
              opacity: 0;
            }

            to {
              top: 10%;
              left: 52%;
              transform: translateX(-50%);
              width: ${images.large};
              height: ${images.large};
              opacity: 1;
            }
          }
        ` : ``
    }
  }
`;

const HeaderOne = styled.h1`
  margin: 1rem auto;
  text-align: center;
  font-size: 1.5rem;
  font-family: 'Karla', monospace;
  font-weight: bold;

  ${media.tablet} {
    margin-left: 3%;
  }
`;

const Navigation = styled.ul`
  width: 100px;
  margin: 2rem auto 0;
  list-style-type: none;

  ${media.tablet} {
    display: none;
    ${
      props => props.open ?
        css`
          display: flex;
          flex-direction: column;
          align-items: center;
          animation-name: open;
          animation-timing-function: ease-out;
          animation-duration: 750ms;

          @keyframes open {
            0% {
              opacity: 0;
            }
            50% {
              opacity: 0.5;
            }
            100% {
              opacity: 1;
            }
          }
        ` : ``
    }
  }

  li {
    position: relative;
    margin-bottom: 1.5rem;
    font-family: 'Karla', sans-serif;
    font-size: 1.25;
    font-weight: bold;
    animation-name: appear;
    animation-delay: 150ms;
    animation-duration: 300ms;
    animation-timing-function: ease-in;

    ${media.tablet} {
      margin-left: 1rem;
    }

    @keyframes appear {
      from {
        margin-top: -1rem;
      }
      to {
        margin-top: unset;
      }
    }

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

      ${media.tablet} {
        left: 50%;
        transform: translateX(-50%);
        width: 2rem;
      }
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

const Social = styled.ul`
  width: 100px;
  margin: 2rem auto;
  list-style-type: none;

  ${media.tablet} {
    display: ${props => props.open ? 'block' : 'none'};
    margin: 1rem auto;
  }

  li {
    margin-bottom: 1rem;
    padding-left: 1rem;

    ${media.tablet} {
      display: flex;
      justify-content: center;
    }
  }
`;

class Navbar extends React.Component {
  state = {
    isNavOpen: false
  }

  toggleNav = () => {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }

  render() {
    return (
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
                id
                text
                link
              }
            }
          }
          allContentfulSocial {
            edges {
              node {
                id
                icon
                link
                image {
                  file {
                    url
                  }
                }
              }
            }
          }
        }
        `}
        render={data => {
          const person = data.contentfulPerson;
          const navitems = unwrap(data.allContentfulNavigationItem);
          const social = unwrap(data.allContentfulSocial);
          return (
            <SideBar open={this.state.isNavOpen}>
              <Headshot 
                size="large" 
                src={person.image.file.url} 
                alt="Edwin"
                onClick={this.toggleNav}
                open={this.state.isNavOpen} />
              <X 
                open={this.state.isNavOpen} 
                onClick={this.toggleNav} />
              <HeaderOne>{person.name}</HeaderOne>
              <Navigation open={this.state.isNavOpen}>
                {navitems.map(({ id, link, text }) => (
                  <li key={id} onClick={this.toggleNav}>
                    <a href={link}>{text}</a>
                  </li>
                ))}
              </Navigation>
              <Social open={this.state.isNavOpen}>
                {social.map(({ id, icon, image, link }) => (
                  <li key={id}>
                    <a 
                      onClick={this.toggleNav}
                      href={link} 
                      target="_blank" 
                      rel="noopener noreferrer">
                      <Image
                        size="xs"
                        src={image.file.url}
                        alt={icon} />
                    </a>
                  </li>
                ))}
              </Social>
            </SideBar>
          )
        }}
      />
    )
  }
}

export default Navbar;