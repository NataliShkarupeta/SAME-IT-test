import { Route, Routes } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { HomePage } from 'pages/HomePage/HomePage';
import { ListPoints } from 'pages/ListPoints/ListPoints';

import { useDispatch } from 'react-redux';
import { fetchAllPoints } from 'redux/points/pointsOperations';
import { useEffect } from 'react';
import { BasicWrap } from './defaultSlyle';

export const App = () => {
  //  const points = useSelector(selectPoints);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllPoints());
  }, [dispatch]);

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
