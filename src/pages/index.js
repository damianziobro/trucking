import React from 'react';

import BlogPost from '../components/BlogPost/BlogPost';
import Offer from '../components/Offer/Offer';

const IndexPage = ({
  data: {
    blog: { edges: blogPostsData },
    offers: { edges: offersData },
  },
}) => {
  return (
    <div>
      <section>
        <h2>Strongest distribution network</h2>
        <ul>
          {blogPostsData.map(blogPostData => (
            <BlogPost key={blogPostData.node.id} blogPostData={blogPostData} />
          ))}
        </ul>
        <button>View details</button>
      </section>
      <section>
        <h2>What we offer</h2>
        <p>Tailored logistic services</p>
        <ul>
          {offersData.map(offerData => (
            <Offer key={offerData.node.id} offerData={offerData} />
          ))}
        </ul>
      </section>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query pageQuery {
    blog: allContentfulBlog {
      edges {
        node {
          id
          title
          text {
            text
          }
        }
      }
    }
    offers: allContentfulOffers {
      edges {
        node {
          id
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
