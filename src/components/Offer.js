import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const OfferItem = styled.li`
  margin-bottom: 30px;
  padding: 35px 35px 35px 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 185px;
  width: calc(50% - 60px);
  background-color: #fcfcfc;
`;

const OfferIcon = styled.img`
  margin: 30px;
  height: 70px;
`;

const OfferTitle = styled.h3`
  font-weight: 700;
  font-size: 1.8em;
  color: #333333;
`;

const OfferText = styled.p`
  font-size: 1.3em;
  color: #777777;
  font-family: 'Open Sans';
`;

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
    <OfferItem>
      <OfferIcon src={url} />
      <div>
        <OfferTitle>{title}</OfferTitle>
        <OfferText>{text}</OfferText>
      </div>
    </OfferItem>
  );
};

Offer.propTypes = {
  offerData: PropTypes.object.isRequired,
};

export default Offer;
