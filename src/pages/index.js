import React from 'react';
import styled from 'styled-components';

import BlogPost from '../components/BlogPost';
import Offer from '../components/Offer';
import Wrapper from '../components/Wrapper';

const HeroSection = styled.section`
  background-color: #122636;

  h2 {
    font-weight: 800;
    font-size: 7.2em;
    text-transform: uppercase;
    color: #ffffff;
    width: 50%;
    align-self: flex-start;
  }

  h2::before {
    content: '';
    display: block;
    width: 70px;
    height: 7px;
    background-color: #fdc300;
  }
`;

const BlogPosts = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`;

const ViewDetailsBtn = styled.button`
  margin: 50px 0;
  width: 220px;
  height: 50px;
  border: 0;
  border-radius: 25px;
  background-color: #fdc300;
  text-transform: uppercase;
  font-weight: 700;
  color: #ffffff;
  font-size: 1.3em;
  cursor: pointer;
  transition: 0.3s;
  opacity: 1;

  &:hover {
    opacity: 0.8;
  }
`;

const IndexPage = ({
  data: {
    blog: { edges: blogPostsData },
    offers: { edges: offersData },
  },
}) => {
  return (
    <div>
      <HeroSection>
        <Wrapper>
          <h2>Strongest distribution network</h2>
          <BlogPosts>
            {blogPostsData.map(blogPostData => (
              <BlogPost
                key={blogPostData.node.id}
                blogPostData={blogPostData}
              />
            ))}
          </BlogPosts>
          <ViewDetailsBtn>View details</ViewDetailsBtn>
        </Wrapper>
      </HeroSection>

      <section>
        <Wrapper>
          <h2>What we offer</h2>
          <p>Tailored logistic services</p>
          <ul>
            {offersData.map(offerData => (
              <Offer key={offerData.node.id} offerData={offerData} />
            ))}
          </ul>
        </Wrapper>
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
