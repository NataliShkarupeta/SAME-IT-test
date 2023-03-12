import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { HomePage } from 'pages/HomePage/HomePage';
import { ListPoints } from 'pages/ListPointsPage/ListPointsPage';

import { BasicWrap } from './defaultSlyle';

export const App = () => {
  

  return (
    <BasicWrap>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<HomePage />} />
          <Route path="branches" element={<ListPoints />} />
        </Route>
      </Routes>
    </BasicWrap>
  );
};
