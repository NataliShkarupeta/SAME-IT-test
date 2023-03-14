import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { HomePage } from 'pages/HomePage/HomePage';
import { ListPoints } from 'pages/ListPointsPage/ListPointsPage';
import { Helmet } from 'react-helmet';
import { BasicWrap } from './defaultSlyle';


export const App = () => {


  return (
    <>
      <BasicWrap>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Під Контролем</title>
          <link rel="canonical" href="http://mysite.com/example" />
          <meta name="description" content="Отримання інформації по запитам" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<HomePage />} />
            <Route path="branches" element={<ListPoints />} />
          </Route>
        </Routes>
      </BasicWrap>
    </>
  );
};
