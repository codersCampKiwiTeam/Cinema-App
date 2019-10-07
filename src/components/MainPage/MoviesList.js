import React from 'react';
import Movie from './Movie';
// import themoviedb from "../../api/themoviedb";
import "./MovieList.css";

class MovieList extends React.Component {
    state = { movies: [] }

    getMovies = async () => {
        await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=4e4eee58b292d2f310cacb8e88e7f12e&language=en-US&page=1', {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                }
            })
            .then(res => {
                if (res.status === 401) {
                    return "Unauthorized request";
                } else if (res.status !== 200) {
                    res.text()
                        .then(text => {
                            return alert(text);
                        });
                } else {
                    res.json()
                        .then(json => {
                            // console.log(json.results);
                            this.setState({ movies: json.results.slice(0, 9) });
                        });
                }
            })
            .catch(err => alert(err));
        };

    componentDidMount() {
        // themoviedb
        //   .get()
        //   .then(resp => {
        //     this.setState({ movies: resp.data.results.slice(0, 10) });
        //   })
        //   .catch(err => console.log(err))
        this.getMovies();
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