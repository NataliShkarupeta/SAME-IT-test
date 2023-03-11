import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  text-decoration: none;
  color: ${p => p.theme.colors.primary};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    /* background-color: ${p => p.theme.colors.secondary}; */
  }
  transition: ${p => p.theme.transitions};
`;

export const Wrap = styled.nav`
  margin-top: ${p => p.theme.space[4]}px;
  margin-right: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;

  display: flex;
  flex-direction: column;
  gap: 40px;
  box-shadow: 0px 1px 20px rgba(90, 9, 100, 0.226972);
 
  @media screen and (min-width: 721px) {
    width: 120px;
  }
  @media screen and (min-width: 960px) {
    width: 300px;
  }
`;

export const PositionBlocks = styled.div`
  display: flex;

  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;

  @media screen and (${p => p.theme.media.medium}) {
    flex-direction: column;
    margin: ${p => p.theme.space[0]}px;
    padding: ${p => p.theme.space[4]}px;
  }
  @media screen and (min-width: 721px) {
/* justify-content: end */
  }
  @media screen and (min-width: 960px) {
    margin-left: ${p => p.theme.space[5]}px;
  }
`;