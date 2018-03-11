import React from 'react';
import ReactDOM from 'react-dom';

class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <img
        src={this.props.poster}
        alt={this.props.title }
        />
        <h2>{this.props.title}</h2>
        <small>{this.props.title.join(', ')}</small>
      </div>
    );
  }
}

// ReactDOM.render(
//   <MovieCard />,
//   document.getElementById('root')
// );


// const MadMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller']
// ReactDOM.render(
//   <MovieCard
//   title="Mad Max: Fury Road"
//   poster="http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg"
//   genres={MadMaxGenres}
//   />,
//   document.getElementById('root')
// );

const jurassicWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  <MovieCard
    title="Jurassic World"
    poster="http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg"
    genres={jurassicWorldGenres}
  />,
  document.getElementById('root')
);
