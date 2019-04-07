import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import reset from 'styled-reset';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';
import Navbar from './navbar';
import { colour, media } from '../../common/styles';

const Content = styled.main`
  max-width: 700px;
  padding-top: 2rem;
  margin-top: 2rem;
  margin-right: 2rem;
  margin-left: calc(37vw + 2rem);

  ${media.desktopSmall} {
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
  background: linear-gradient(to bottom, ${colour.space}, ${colour.white});

  ${media.desktopLarge} {
    margin-left: 40vw;
  }
`;

function Layout({ children }) {
  injectGlobal`
		${reset}

		body {
			font-family: 'Inconsolata', monospace;
      color: ${colour.black};
		}

    h1, h2, h3, h4, p, span, a, li {
      &::selection {
        background: ${colour.pale}; /* WebKit/Blink Browsers */
      }
      &::-moz-selection {
        background: ${colour.pale}; /* Gecko Browsers */
      }
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
