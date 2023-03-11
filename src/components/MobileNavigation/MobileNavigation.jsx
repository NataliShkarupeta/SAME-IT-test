import { Outlet } from 'react-router-dom';
import {  PositionBlocks } from 'components/Navigation/Navigation.styled';
import { Header } from 'components/Header/Header';
import { MobileLink,Wrap } from './MobileNavigation.styled';
import { useDispatch } from 'react-redux';
import { resetPoints } from 'redux/points/pointsSlice';

export const MobileNavigation = () => {

    const dispatch = useDispatch();
  return (
    <>
      <Header />
      <PositionBlocks>
        <Wrap>
          <MobileLink onClick={() => dispatch(resetPoints([]))} to="/">
            {' '}
            Перевірити ТТН
          </MobileLink>
          <MobileLink to="/branches"> Список відділень </MobileLink>
        </Wrap>
        <Outlet />
      </PositionBlocks>
    </>
  );
};
