// Code goes here

import React from 'react';
import ReactDOM from "react-dom";

class MovieCard extends React.Component{
  render(){
    return(
      <div className="movie-card">
        <img src={this.props.poster} alt={this.props.title}/>
        <h2>{this.props.title}</h2>
        <small>Genres: {this.props.genres.join(", ")}</small>
      </div>
    )
  }
}

const madMaxGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
const madMaxTitle = "Mad Max: Fury Road";
const madMaxPoster = "http://image.tmdb.org/t/p/w342/kqjL17yufvn9OVLyXYpvtyrFfak.jpg";

const jurasicParkGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];
const jurasicParkTitle = "Jurassic World";
const jurasicParkPoster = "http://image.tmdb.org/t/p/w342/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg";

MovieCard.defaultProps = {
  poster: 'http://i.imgur.com/bJw8ndW.png'
}

ReactDOM.render(
  // <MovieCard
  //   title={madMaxTitle}
  //   poster={madMaxPoster}
  //   genres={madMaxGenres}
  // />,
  <MovieCard
    title={jurasicParkTitle}
    poster={jurasicParkPoster}
    genres={jurasicParkGenres}
    />,
  document.getElementById("root")
)
