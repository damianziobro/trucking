import React from 'react';
import Link from 'gatsby-link';

const BlogPost = ({
  blogPostData: {
    node: {
      title,
      text: { text },
    },
  },
}) => {
  return (
    <li>
      <div>
        <Link to="/">
          Read more
          <span>></span>
        </Link>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    </li>
  );
};

export default BlogPost;
