import React from "react";
import { Link } from "react-router";


export default class Navigation extends React.Component {
    render() {
        return (
        <ul className="navigation">
            <li className="navigation__item">
                <Link to="/decks" className="navigation__link">Decks</Link>
            </li>
            <li className="navigation__item">
                <Link to="/cards" className="navigation__link">Pictures</Link>
            </li>
            <li className="navigation__item">
                <Link to="/people" className="navigation__link">People</Link>
            </li>
            <li className="navigation__item">
                <Link to="/Settings" className="navigation__link">Settings</Link>
            </li>
        </ul>
        )
    }
}