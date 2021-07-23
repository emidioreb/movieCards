import React from 'react';
import PropsTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className = 'rating' >{rating}</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropsTypes.number.isRequired,
};

export default Rating;
