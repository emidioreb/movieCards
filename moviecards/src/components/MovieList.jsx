import React from 'react';
import PropsTypes from 'prop-types';
import MovieCard from './MovieCard';

// map vai fazer eu passar por todos os filmes da minha lista pegando os valores q eu quero
class MovieList extends React.Component {
  render() {
    // pegando os dados que esta vindo do elemento pai(App.js), estou desestruturando e colocando no map.
    const { movies } = this.props;
    return (
      <div className = 'movie-list '>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropsTypes.arrayOf(PropsTypes.object).isRequired,
};
export default MovieList;
