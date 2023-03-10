import { Outlet } from 'react-router-dom';
import { NavigationLink, Wrap, PositionBlocks } from './Navigation.styled';
import { Header } from 'components/Header/Header';
import { MobileNavigation } from 'components/MobileNavigation/MobileNavigation';
import { useMedia } from 'react-use';

export const Navigation = () => {
  const isTablet = useMedia('(max-width: 720px)');
  return (
    <>
      {isTablet ? (
        <MobileNavigation />
      ) : (
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
      )}
    </>
  );
};
