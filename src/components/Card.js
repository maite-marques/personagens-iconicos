import React from 'react';
import PropTypes from 'prop-types';

class Card extends React.Component {
  render() {
    const { personagem: { image, name } } = this.props;

    return (
      <div className="figureInfo">
        <img className="figureImage" src={image} alt={name} />
        <p>{name}</p>
      </div>
      );
  }
}

Card.propTypes = {
  personagem: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })
}

export default Card;