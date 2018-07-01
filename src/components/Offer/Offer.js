import React from 'react';
import PropTypes from 'prop-types';

const Offer = ({
  offerData: {
    node: {
      title,
      text: { text },
      icon: {
        file: { url },
      },
    },
  },
}) => {
  return (
    <li>
      <img src={url} />
      <h3>{title}</h3>
      <p>{text}</p>
    </li>
  );
};

Offer.propTypes = {
  offerData: PropTypes.object.isRequired,
};

export default Offer;
