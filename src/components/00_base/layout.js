import React from 'react';
import UserProfile from '../02_molecules/user-profile'
import Navigation from '../03_organisms/navigation';
import Search from '../Search'

export default class Layout extends React.Component {
  render() {
    return (
      <div className="t-layout">
        <nav className="t-layout__sidebar">
            <UserProfile/>
          <Navigation/>
        </nav>
        <main className="t-layout__desk">
            <Search/>
        </main>
      </div>
    )
  }
}