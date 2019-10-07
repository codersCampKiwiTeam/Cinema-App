import React from 'react';
import "./Header.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends React.Component {
    render() {
        return (
            <header>
                <a href="/">
                    <h1>Kiwi Cinema <i className="fas fa-video"></i></h1>
                </a>
            </header>
        )
    }
}

export default Header