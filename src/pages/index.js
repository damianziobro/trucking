import React from 'react';
import Link from 'gatsby-link';

const IndexPage = data => {
  return (
    <div>
      <h1>Trucking</h1>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query OffersQuery {
    allContentfulOffers(limit: 100) {
      edges {
        node {
          title
          text {
            text
          }
          icon {
            file {
              url
            }
          }
        }
      }
    }
  }
`;
