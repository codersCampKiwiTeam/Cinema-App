import React from 'react';
import Movie from './Movie';
import themoviedb from "../../api/themoviedb";
import "./MovieList.css";

class MovieList extends React.Component {
    state = { movies: [] }

    componentDidMount() {
        themoviedb
          .get()
          .then(resp => {
            this.setState({ movies: resp.data.results.slice(0, 10) });
          })
          .catch(err => console.log(err))
      };

    render () {
        return (
            <div className="movie-list">
                {this.state.movies.map(movie => (
                    <Movie 
                    movieInfo = {movie}
                    key = {movie.id}
                    posterUrl= {"https://image.tmdb.org/t/p/w342" + movie.poster_path}
                    />
                ))}
            </div>
        )
    }
}

export default MovieList