class MovieCard extends React.Component{
  render(){
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

const jurassocWorldGenres = ['Action', 'Adventure', 'Science Fiction', 'Thriller'];

ReactDOM.render(
  <MovieCard
    title="Juassic World"
    genres={jurassocWorldGenres}
    />,
  document.getElementById('root')
);
