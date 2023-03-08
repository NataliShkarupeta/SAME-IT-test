import { Outlet } from 'react-router-dom';
import { NavigationLink, Wrap, PositionBlocks } from './Navigation.styled';

export const Navigation = () => {
  return (
    <PositionBlocks>
      <Wrap>
        <NavigationLink to="/"> Перевірити ТТН</NavigationLink>
        <NavigationLink to="/branches"> Список відділень </NavigationLink>
      </Wrap>
      <Outlet />
    </PositionBlocks>
  );
};
