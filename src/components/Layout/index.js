import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navbar from './navbar';

const Content = styled.main`
  padding: 20px;
  margin: auto;

  & > h2 {
    font-size: 28px;
    font-weight: bold;
  }

  & > section {
    background: #fff;
    padding: 40px 30px;
    margin: 2rem 2rem 0 25vw;

    &::before {
      content: '';
      position: absolute;
      top: -20px;
      right: 0;
      bottom: 0;
      left: 0;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
      background: #fff;
      transform: rotate(-2deg);
      z-index: -1;
    }
  }

  & > section > h1 {
    font-size: 24px;
  }

  & > section > h2 {
    font-size: 21px;
  }

  & > section > p {
    line-height: 1.6;
    font-size: 16px;
    margin-bottom: 15px;
  }

  & > section > img {
    max-width: 100%;
    height: auto;
  }
`;

const Divider = styled.div`
  width: 1px;
  height: 100vh;
  margin-left: 33vw;
  background: linear-gradient(to bottom, #2E294E, #FFF);
`;

function Layout({ children, person, navitems }) {
  injectGlobal`
		${reset}

		body {
			font-family: 'Inconsolata', monospace;
      color: #343434;
		}

    h1,
    h2,
    h3,
    h4 {
			font-family: 'Karla', monospace;
    }
	`;

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={data => (
        <>
          <Helmet title={data.site.siteMetadata.title}>
            <html lang="en" />
            <link href="https://fonts.googleapis.com/css?family=Inconsolata|Karla" rel="stylesheet" />
          </Helmet>
          <Navbar {...{person, navitems}} />
          <Divider />
          <Content>{children}</Content>
        </>
      )}
    />
  );
}

export default Layout;
