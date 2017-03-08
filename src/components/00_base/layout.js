import React from 'react';
import Navigation from '../components/navigation';

export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <nav className="">
          <Navigation/>
        </nav>

        {this.props.children}
      </div>
    )
  }
}
