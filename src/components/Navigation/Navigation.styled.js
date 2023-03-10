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
  width: 300px;
  /* width: ${p => p.theme.sizes[8]}px; */
  display: flex;
  flex-direction: column;
  gap: 40px;
  box-shadow: 0px 1px 20px rgba(90, 9, 100, 0.226972);
`;

export const PositionBlocks = styled.div`
  margin-left: ${p => p.theme.space[5]}px;
  display: flex;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  @media screen and (${p => p.theme.media.small}) {
    flex-direction: column;
    padding: ${p => p.theme.space[2]}px;
  }
  @media screen and (${p => p.theme.media.medium}) {
    flex-direction: column;
    padding: ${p => p.theme.space[3]}px;
  }
`;