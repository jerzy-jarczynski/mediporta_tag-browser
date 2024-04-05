import React, { useEffect } from 'react';
import { Container } from '@mui/material';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import NotFoundPage from './components/pages/NotFoundPage/NotFoundPage';
import ErrorPage from './components/pages/ErrorPage/ErrorPage';
import LoadingPage from './components/pages/LoadingPage/LoadingPage';
import Header from './components/views/Header/Header';
import Footer from './components/views/Footer/Footer';
import { fetchTags } from './redux/tagsRedux';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const { data: tags, loading, error } = useSelector((state) => state.tags);

  useEffect(() => {
    dispatch(fetchTags());
  }, [dispatch]);

  return (
    <Container maxWidth="md">
      <Header />
      {loading && <LoadingPage />}
      {!loading && (
        <>
          {error || !tags ? (
            <ErrorPage errorMessage={error} />
          ) : (
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          )}
          <Footer />
        </>
      )}
    </Container>
  );
};

export default App;
