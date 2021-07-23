import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// Aonde eu estou organizando os meus dados que la do data: sequencia, oq eu quero de qual forma eu apresento.
class MovieCard extends React.Component {
  render() {
    // desentruturando os dados que esta vindo do elemento pai(MovieList.jsx) e filtrando do jeito que eu quero.
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;
    return (
      <div className = 'movie-card movie-card-body'>
        <img className = 'movie-card-image' src={ imagePath } alt={ title } />
        <h4 className = 'movie-card-title '>{title}</h4>
        <h5 className = 'movie-card-subtitle'>{subtitle}</h5>
        <p className = 'movie-card-storyline'>{storyline}</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
