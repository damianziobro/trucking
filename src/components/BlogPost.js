import React from 'react';
import Link from 'gatsby-link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlogPostStyled = styled.li`
  margin: 10px;
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
`;

const TopWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  background-color: #dededd;
  height: 216px;
`;

const BottomWrapper = styled.div`
  height: 187px;
  padding: 30px;
  background-color: #ffffff;
`;

const ReadMoreLink = styled(Link)`
  padding: 15px 0 15px 30px;
  background-color: #1b2936;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.3em;
  color: #ffffff;
  font-weight: 700;
  transition: 0.3s;

  span {
    margin-left: 30px;
    padding: 15px;
    background-color: #2f3840;
    transition: 0.3s;
  }

  &:hover {
    background-color: #006db7;

    span {
      background-color: #037ed1;
    }
  }
`;

const BlogPostTitle = styled.h3`
  color: #333333;
  font-weight: 800;
  font-size: 1.8em;
  text-transform: uppercase;

  &::before {
    margin-bottom: 5px;
    content: '';
    display: block;
    width: 30px;
    height: 3px;
    background-color: #fdc300;
  }
`;

const BlogPostText = styled.p`
  font-size: 1.3em;
  color: #777777;
  font-family: 'Open Sans', sans-serif;
`;

const BlogPost = ({
  blogPostData: {
    node: {
      title,
      text: { text },
    },
  },
}) => {
  return (
    <BlogPostStyled>
      <TopWrapper>
        <ReadMoreLink to="/">
          Read more
          <span>></span>
        </ReadMoreLink>
      </TopWrapper>
      <BottomWrapper>
        <BlogPostTitle>{title}</BlogPostTitle>
        <BlogPostText>{text}</BlogPostText>
      </BottomWrapper>
    </BlogPostStyled>
  );
};

BlogPost.propTypes = {
  blogPostData: PropTypes.object.isRequired,
};

export default BlogPost;
