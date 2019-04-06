import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Layout from '../components/Layout';
import { Body, SectionHeader } from '../common/text';

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
    render={data => (
      <Layout>
        <SectionHeader diminished>About</SectionHeader>
        <section>
          <Body>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore sed, omnis commodi velit iste quidem nihil voluptatum et temporibus nisi consectetur optio perspiciatis nostrum, rerum vero perferendis nam consequatur culpa, enim odit labore? Facere temporibus voluptatem est unde delectus soluta. Debitis deleniti velit quis eveniet id reprehenderit quaerat beatae consequatur praesentium, eaque voluptatem libero aperiam esse suscipit harum, quibusdam accusantium repudiandae animi temporibus ad deserunt dignissimos vel quo. Nihil dolore sunt corrupti dicta perferendis magni dolores ratione sint velit vel dolor voluptas similique perspiciatis repellat quos rerum voluptatibus obcaecati architecto fugiat facere, vero porro consequuntur beatae. Assumenda nemo asperiores saepe perspiciatis itaque aut possimus optio temporibus, quidem odio at quos. Odio dignissimos ipsum quidem rerum voluptatum, similique repudiandae nisi eum iste eos nihil voluptas veritatis aperiam dolore impedit minima sunt eligendi tenetur!</Body>
        </section>
      </Layout>
    )
    }
  />
);

export default HomePage;
