import { Outlet } from 'react-router-dom';
import {  PositionBlocks } from 'components/Navigation/Navigation.styled';
import { Header } from 'components/Header/Header';
import { MobileLink,Wrap } from './MobileNavigation.styled';

export const MobileNavigation = () => {
  return (
    <>
      <Header />
      <PositionBlocks>
        <Wrap>
          <MobileLink to="/"> Перевірити ТТН</MobileLink>
          <MobileLink to="/branches"> Список відділень </MobileLink>
        </Wrap>
        <Outlet />
      </PositionBlocks>
    </>
  );
};
