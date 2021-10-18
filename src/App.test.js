import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';


describe('Main app  component test', () => {


  test('on intial app render, Albelli Ads should be in the document', () =>{
    const { getByText } = render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(getByText(/Albelli Ads/i)).toBeInTheDocument();

  });


  



});
