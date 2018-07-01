import React from 'react';

import BlogPost from '../components/BlogPost/BlogPost';

const IndexPage = ({
  data: {
    allContentfulBlog: { edges: blogPostsData },
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
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query pageQuery {
    allContentfulBlog(limit: 100) {
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
  }
`;
