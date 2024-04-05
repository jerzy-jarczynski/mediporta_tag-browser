import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import CountInput from '../components/features/CountInput/CountInput';

export default {
  title: 'Components/CountInput',
  component: CountInput,
};

// Otwarcie provider w story
export const Default = () => (
  <Provider store={store}>
    <CountInput />
  </Provider>
);