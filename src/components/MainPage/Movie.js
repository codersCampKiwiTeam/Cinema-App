import React from "react";
import "./Movie.css"
import { Link } from "react-router-dom";

class Movie extends React.Component {
    state = { posterUrl: "" }

    render() {
        return (
            <div className="movie-container">
                <div className="movie-header">
                    <h3>{this.props.movieInfo.title}</h3>
                </div>
                <img 
                className="poster"
                src={this.props.posterUrl} 
                alt={`Poster of movie: ${this.props.movieInfo.title}`}
                />
                <div>
                    <Link 
                    to={`/reservation-first-step/${this.props.movieInfo.original_title}`}>
                       <button className="btn-movie">Reserve Tickets</button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Movie