import React from 'react';
import styled from 'styled-components';

import BlogPost from '../components/BlogPost';
import Offer from '../components/Offer';
import Wrapper from '../components/Wrapper';

const HeroSection = styled.section`
  background-color: #122636;
`;

const BlogPosts = styled.ul`
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`;

const HeroSectionHeading = styled.h2`
  margin: 187px 0;
  font-weight: 800;
  font-size: 7.2em;
  text-transform: uppercase;
  color: #ffffff;
  width: 50%;
  align-self: flex-start;

  &::before {
    content: '';
    display: block;
    width: 70px;
    height: 7px;
    background-color: #fdc300;
  }
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

const OffersSection = styled.section`
  background-color: #ffffff;
`;

const OffersSectionTitle = styled.h2`
  margin-bottom: 0;
  color: #333333;
  font-weight: 700;
  font-size: 3em;
`;

const OffersSectionSubtitle = styled.p`
  margin: 5px;
  color: #888888;
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.3em;

  &::after {
    margin: 10px auto;
    content: '';
    display: block;
    width: 33px;
    height: 6px;
    background-color: #fdc300;
  }
`;

const OffersList = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
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
          <HeroSectionHeading>
            Strongest distribution network
          </HeroSectionHeading>
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

      <OffersSection>
        <Wrapper>
          <OffersSectionTitle>What we offer</OffersSectionTitle>
          <OffersSectionSubtitle>
            Tailored logistic services
          </OffersSectionSubtitle>
          <OffersList>
            {offersData.map(offerData => (
              <Offer key={offerData.node.id} offerData={offerData} />
            ))}
          </OffersList>
        </Wrapper>
      </OffersSection>
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
