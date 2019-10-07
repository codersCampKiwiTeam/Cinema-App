import React from "react";
import { Link } from "react-router-dom";
import "./CompletedReservation.css";

class CompletedReservation extends React.Component {
    render() {
        return (
            <div id="popup">
                <h1>Your reservation number is {this.props.reservationNumber}</h1>
                <h2>Thank You for choosing our Cinema</h2>
                <Link to={"/"}>
                    <button>Home Page</button>
                </Link>
            </div>
        )
    }
}

export default CompletedReservation