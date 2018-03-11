import React from 'react';
import ReactDOM from 'react-dom';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img
          src={this.props.poster}
          alt={this.props.title}
        />
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(', ')}</small>
      </div>
    );
  }
}

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
};


const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    genres={jurassicWorldGenres}
  />,
  document.getElementById('root')
);
