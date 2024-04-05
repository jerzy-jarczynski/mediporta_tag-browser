import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import TagsTable from '../components/features/TagsTable/TagsTable';

export default {
  title: 'Components/TagsTable',
  component: TagsTable,
};

export const Default = () => (
  <Provider store={store}>
    <TagsTable />
  </Provider>
);
