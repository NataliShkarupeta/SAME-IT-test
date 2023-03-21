import { Outlet } from 'react-router-dom';
import { NavigationLink, Wrap, PositionBlocks } from './Navigation.styled';
import { Header } from 'components/Header/Header';
import { MobileNavigation } from 'components/MobileNavigation/MobileNavigation';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { resetPoints } from 'redux/points/pointsSlice';
import { selectGlobalTheme } from 'redux/allrequests/allrequestsSelectors';
import { AllRequests } from 'components/AllRequests/AllRequests';
import { FooterBlock } from 'components/Footer/Footer';
import { WrapForFooter, WrapForHederAndNav } from './Navigation.styled';
import { Suspense } from 'react';

export const Navigation = () => {
  const isTablet = useMedia('(max-width: 720px)');
  const globalTheme = useSelector(selectGlobalTheme);
  const dispatch = useDispatch();
  return (
    <>
      {isTablet ? (
        <MobileNavigation />
      ) : (
        <WrapForFooter>
          <WrapForHederAndNav>
            <Header />
            {globalTheme && <AllRequests />}
            <PositionBlocks>
              <Wrap>
                <NavigationLink
                  onClick={() => dispatch(resetPoints([]))}
                  to="/"
                >
                  Перевірити ТТН
                </NavigationLink>
                <NavigationLink to="/branches">
                  {' '}
                  Список відділень{' '}
                </NavigationLink>
              </Wrap>
              <Suspense>
                <Outlet />
              </Suspense>
            </PositionBlocks>
          </WrapForHederAndNav>
          <FooterBlock />
        </WrapForFooter>
      )}
    </>
  );
};
