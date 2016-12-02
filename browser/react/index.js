import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer';
import Albums from './components/Albums';
import Album from './components/Album';
import Artists from './components/Artists';
import Artist from './components/Artist';
import Songs from './components/Songs';
import NotFound from './NotFound';
import {Router, Route, hashHistory, Link, IndexRedirect} from 'react-router';

ReactDOM.render(
  <Router history={hashHistory}>

    <Route path='/' component={AppContainer}>
      <IndexRedirect to='/albums' />
      <Route path='albums' component={Albums} />
      <Route path="albums/:albumId" component={Album} />
      <Route path='artists' component={Artists} />
      <Route path="artists/:artistId" component={Artist}>
        <Route path='albums' component={Albums} />
        <Route path='songs' component={Songs} />
        <Route path='*' component={NotFound} />
      </Route>

    </Route>
  <Route path='*' component={NotFound} />
  </Router>,
  document.getElementById('app')
);
