import React from "react";
import { Link } from "react-router";
import IconDeck from '../01_atoms/icon-deck';
import IconMultipleSwitches from '../01_atoms/icon-multiple-switches';
import IconCardText from '../01_atoms/icon-cards-text';
import IconNetwork from '../01_atoms/icon-network';

export default class Navigation extends React.Component {
    render() {
        return (
        <ul className="navigation" role="menu">
            <li className="navigation__item">
                <IconDeck className="navigation__icon"/>
                <Link id="decks" to="/decks" className="navigation__link" role="menu-item">Decks</Link>
            </li>
            <li className="navigation__item">
                <IconCardText className="navigation__icon"/>
                <Link id="picture" to="/cards" className="navigation__link" role="menu-item">Cards</Link>
            </li>
            <li className="navigation__item">
                <IconNetwork className="navigation__icon"/>
                <Link id="people" to="/people" className="navigation__link" role="menu-item">People</Link>
            </li>
            <li className="navigation__item">
                <IconMultipleSwitches className="navigation__icon"/>
                <Link id="settings" to="/settings" className="navigation__link" role="menu-item">Settings</Link>
            </li>
        </ul>
        )
    }
}