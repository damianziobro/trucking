import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { injectGlobal } from 'styled-components';

import Header from '../components/Header';

const Layout = ({
  children,
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet
      title={title}
      link={[
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css?family=Open+Sans|Raleway:400,700,800',
        },
      ]}
    />
    <Header />
    <div>{children()}</div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.func,
  data: PropTypes.object,
};

export default Layout;

injectGlobal`
  body {
    padding: 0;
    margin: 0;
    font-family: 'Raleway', sans-serif;
    font-size: 10px;
  }
`;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
