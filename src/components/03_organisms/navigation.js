import React from "react";
import { Link } from "react-router";

export default class Navigation extends React.Component {
    render() {
        return (
        <ul className="navigation" role="menu">
            <li className="navigation__item">
                <Link id="decks" to="/decks" className="navigation__link" role="menu-item">Decks</Link>
            </li>
            <li className="navigation__item">
                <Link id="picture" to="/cards" className="navigation__link" role="menu-item">Cards</Link>
            </li>
            <li className="navigation__item">
                <Link id="people" to="/people" className="navigation__link" role="menu-item">People</Link>
            </li>
            <li className="navigation__item">
                <Link id="settings" to="/settings" className="navigation__link" role="menu-item">Settings</Link>
            </li>
        </ul>
        )
    }
}