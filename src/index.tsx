import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { home } from './reducers/home/index';
import { StoreState } from './types/home/index';
// tslint:disable-next-line:no-import-side-effect
import './index.css';
import App from './containers/App';

const store = createStore<StoreState>(home, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <App  />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
