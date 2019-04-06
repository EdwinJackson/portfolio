import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navbar from './navbar';

const Content = styled.main`
  max-width: 700px;
  padding-top: 2rem;
  margin-top: 2rem;
  margin-right: 2rem;
  margin-left: calc(37vw + 2rem);

  @media (min-width: 1440px) {
    margin-left: 45vw;
  }

  & > section {
    margin: 0 auto 5rem;
  }
`;

const Divider = styled.div`
  position: fixed;
  width: 1px;
  height: 90vh;
  margin-left: 33vw;
  background: linear-gradient(to bottom, #2E294E, #FFF);

  @media (min-width: 1500px) {
    margin-left: 40vw;
  }
`;

function Layout({ children }) {
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
          </Helmet>
          <Navbar />
          <Divider />
          <Content>{children}</Content>
        </>
      )}
    />
  );
}

export default Layout;
