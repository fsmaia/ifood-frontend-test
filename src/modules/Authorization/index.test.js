import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import ReduxThunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Authorization from './index';

const mockStore = configureStore([ReduxThunk]);

it('renders without crashing', () => {
  const store = mockStore({});

  mount(
    <Provider store={store}>
      <Authorization />
    </Provider>
  );
});

it('authorizes with token in URL', () => {
  const store = mockStore({});

  mount(
    <Provider store={store}>
      <BrowserRouter>
        <Authorization hash="?access_token=123" />
      </BrowserRouter>
    </Provider>
  );
});
