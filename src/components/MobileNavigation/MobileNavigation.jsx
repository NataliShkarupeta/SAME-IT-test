import { Outlet } from 'react-router-dom';
import {
  PositionBlocks,
  WrapForHederAndNav,
  WrapForFooter,
} from 'components/Navigation/Navigation.styled';
import { Header } from 'components/Header/Header';
import { MobileLink, Wrap } from './MobileNavigation.styled';
import { useDispatch, useSelector } from 'react-redux';
import { resetPoints } from 'redux/points/pointsSlice';
import { selectGlobalTheme } from 'redux/allrequests/allrequestsSelectors';
import { AllRequests } from 'components/AllRequests/AllRequests';
import { FooterBlock } from 'components/Footer/Footer';

export const MobileNavigation = () => {
  const globalTheme = useSelector(selectGlobalTheme);
  const dispatch = useDispatch();
  return (
    <>
      <WrapForFooter>
        <WrapForHederAndNav>
          <Header />
          {globalTheme && <AllRequests />}
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
        </WrapForHederAndNav>
        <FooterBlock />
      </WrapForFooter>
    </>
  );
};
