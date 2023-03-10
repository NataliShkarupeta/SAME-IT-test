import { Outlet } from 'react-router-dom';
import { NavigationLink, Wrap, PositionBlocks } from './Navigation.styled';
import { Header } from 'components/Header/Header';
export const Navigation = () => {
  return (
    <>
      <Header />
      <PositionBlocks>
        <Wrap>
          <NavigationLink to="/"> Перевірити ТТН</NavigationLink>
          <NavigationLink to="/branches"> Список відділень </NavigationLink>
        </Wrap>
        <Outlet />
      </PositionBlocks>
    </>
  );
};
