import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router, Route, Redirect} from 'react-router';

// Layout
import Layout from './components/00_base/layout';

// Pages
import DecksPage from './components/05_pages/decks';
import CardsPage from './components/05_pages/cards';
import PeoplePage from './components/05_pages/people';
import SettingsPage from './components/05_pages/settings';

const app = (
  <Router history={hashHistory}>
    <Redirect from="/" to="/decks" />
    <Route path="/" component={Layout}>
      <Route path="decks" component={DecksPage} />
      <Route path="cards" component={CardsPage} />
        <Route path="people" component={PeoplePage} />
        <Route path="settings" component={SettingsPage} />
    </Route>
  </Router>
);

// Render when document is ready
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    app,
    document.getElementById('app')
  );
});
