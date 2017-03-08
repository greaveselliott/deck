import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory, Router, Route, Redirect} from 'react-router';

// Layout
import Layout from './layout/layout';

// Pages
import DecksPage from './pages/decks';
import CardsPage from './pages/cards';
import PeoplePage from './pages/people';
import SettingsPage from './pages/settings';

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
    document.getElementById('comment-box')
  );
});
