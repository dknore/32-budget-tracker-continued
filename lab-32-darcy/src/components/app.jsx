import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import budgetReducer from '../reducers/reducerApp.jsx';
import categoryPage from './categoryPage.jsx';

const store = createStore(budgetReducer);

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