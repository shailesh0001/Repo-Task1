import React from "react";
import PropTypes from "prop-types";

import "../styles/card.scss";
// import ENUMS from "../../../utils/ENUMS";

const Card = props => {
    const {
        label,
        image,
        primaryData,
        secondaryDataLeft,
        secondaryDataCenter,
        secondaryDataRight
    } = props;

    return (
      <div className={Card.styles.cardContainer}>
        <h2 className={Card.styles.greenColor}>{label}</h2>
        <img alt="icon" src={image} className={Card.styles.logoStyling} />
        <h3 className={Card.styles.primaryData}>{primaryData}</h3>
        <div className={Card.styles.secondaryContainer}>
          <h4 className={Card.styles.secondaryDataLeft}>{secondaryDataLeft}</h4>
          <h4 className={Card.styles.secondaryDataCenter}>{secondaryDataCenter}</h4>
          <h4 className={Card.styles.secondaryDataRight}>{secondaryDataRight}</h4>
        </div>
      </div>
    );
};

Card.propTypes = {
    label: PropTypes.string.isRequired,
    image: PropTypes.bool.isRequired,
    primaryData: PropTypes.string.isRequired,
    secondaryDataLeft: PropTypes.string.isRequired,
    secondaryDataCenter: PropTypes.string.isRequired,
    secondaryDataRight: PropTypes.string.isRequired
};

Card.styles = {
    cardContainer: "nos-ds__card-container",
    cardStyling: "nos-ds__card-container",
    logoStyling: "nos-ds__card-logo",
    primaryData: "nos-ds__card-primary-data",
    secondaryDataLeft: "nos-ds__card-secondary-data-left",
    secondaryDataCenter: "nos-ds__card-secondary-data-center",
    secondaryDataRight: "nos-ds__card-secondary-data-right",
    secondaryContainer: "nos-ds__card-secondary-container"
};

export default Card;

// <div className={Card.styles.cardContainer}>
//   <h2 className={Card.styles.greenColor}>
//     {ENUMS.CARD.LABEL}
//   </h2>
//   <img alt="icon" src={ENUMS.CARD.ICON_URL} className={Card.styles.logoStyling} />
//   <h3 className={Card.styles.primaryData}>
//     {ENUMS.CARD.PRIMARY_DATA}
//   </h3>
//   <div className={Card.styles.secondaryContainer}>
//     <h4 className={Card.styles.secondaryDataLeft}>
//       {ENUMS.CARD.SECONDARY_DATA_LEFT}
//     </h4>
//     <h4 className={Card.styles.secondaryDataCenter}>
//       {ENUMS.CARD.SECONDARY_DATA_CENTER}
//     </h4>
//     <h4 className={Card.styles.secondaryDataRight}>
//       {ENUMS.CARD.SECONDARY_DATA_RIGHT}
//     </h4>
//   </div>
// </div>
