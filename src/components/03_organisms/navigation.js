import React from "react";
import { Link } from "react-router";
import IconDeck from '../01_atoms/icon-deck';
import IconMultipleSwitches from '../01_atoms/icon-multiple-switches';
import IconCardText from '../01_atoms/icon-cards-text';
import IconNetwork from '../01_atoms/icon-network';

export default class Navigation extends React.Component {
    render() {
        return (
        <ul className="o-navigation" role="menu">
            <li className="o-navigation__item">
                <IconDeck className="o-navigation__icon"/>
                <Link id="decks" to="/decks" className="o-navigation__link" role="menu-item">Decks</Link>
            </li>
            <li className="o-navigation__item">
                <IconCardText className="o-navigation__icon"/>
                <Link id="picture" to="/cards" className="o-navigation__link" role="menu-item">Cards</Link>
            </li>
            <li className="o-navigation__item">
                <IconNetwork className="o-navigation__icon"/>
                <Link id="people" to="/people" className="o-navigation__link" role="menu-item">People</Link>
            </li>
            <li className="o-navigation__item">
                <IconMultipleSwitches className="o-navigation__icon"/>
                <Link id="settings" to="/settings" className="o-navigation__link" role="menu-item">Settings</Link>
            </li>
        </ul>
        )
    }
}