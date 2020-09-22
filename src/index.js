import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import './components/Pagination/pagination.scss';
import './components/MovieList/MovieList.scss'

import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import App from './App';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>,
  document.getElementById('root')
);
