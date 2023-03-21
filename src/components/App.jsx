import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { HomePage } from 'pages/HomePage/HomePage';
import  ListPoints  from 'pages/ListPointsPage/ListPointsPage';
import { Helmet } from 'react-helmet';
// import { lazy } from 'react';

// const ListPoints = lazy(() => import('pages/ListPointsPage/ListPointsPage'));

export const App = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Під Контролем</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="Отримання інформації по запитам" />
      </Helmet>
      <Routes>
        <Route path="/weather" />
        <Route path="/news" />
        <Route path="/horoscope" />
        <Route path="/health" />
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="branches" element={<ListPoints />} />
        </Route>
      </Routes>
    </>
  );
};
