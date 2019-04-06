import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';

const HomePage = () => (
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
      const {node: person} = data.allContentfulPerson.edges[0];
      const {node: navitems} = data.allContentfulNavigationItem.edges.map(({node}) => ({...node}));
      console.log(person);
      return (
        <Layout {...{person, navitems}}>
        </Layout>
      )}
    }
  />
);

export default HomePage;
