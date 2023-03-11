import { Outlet } from 'react-router-dom';
import { NavigationLink, Wrap, PositionBlocks } from './Navigation.styled';
import { Header } from 'components/Header/Header';
import { MobileNavigation } from 'components/MobileNavigation/MobileNavigation';
import { useMedia } from 'react-use';
import { useDispatch} from 'react-redux';
import { resetPoints } from 'redux/points/pointsSlice';

export const Navigation = () => {
  const isTablet = useMedia('(max-width: 720px)');

   const dispatch = useDispatch();
  return (
    <>
      {isTablet ? (
        <MobileNavigation />
      ) : (
        <>
          <Header />
          <PositionBlocks>
            <Wrap>
              <NavigationLink onClick={() => dispatch(resetPoints([]))} to="/">
                {' '}
                Перевірити ТТН
              </NavigationLink>
              <NavigationLink to="/branches"> Список відділень </NavigationLink>
            </Wrap>
            <Outlet />
          </PositionBlocks>
        </>
      )}
    </>
  );
};
