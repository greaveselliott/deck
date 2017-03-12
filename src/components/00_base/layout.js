import React from 'react';
import Navigation from '../03_organisms/navigation';
import Search from '../Search'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="t-layout">
        <nav className="t-layout__sidebar">
          <Navigation/>
        </nav>
        <main className="t-layout__desk">
            <Search/>
        </main>
      </div>
    )
  }
}