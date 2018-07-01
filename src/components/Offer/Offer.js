import React from 'react';

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

export default Offer;
