import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <div className="top-menu">
          <ul>
            <li>
              <Link to="/decks">Decks</Link>
            </li>
            <li>
              <Link to="/cards">Pictures</Link>
            </li>
            <li>
              <Link to="/people">People</Link>
            </li>
            <li>
              <Link to="/Settings">Settings</Link>
            </li>
          </ul>
        </div>

        {this.props.children}
      </div>
    )
  }
}
