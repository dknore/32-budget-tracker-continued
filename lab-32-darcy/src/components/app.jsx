import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import categoryReducer from '../reducers/categoryReducer.js'; // change this to index.js!!
import categoryPage from './Category/categoryPage.jsx';

const store = createStore(categoryReducer);

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path='/' component={categoryPage} />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;