import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  font-family: ${p => p.theme.fonts.heading};
  font-size: ${p => p.theme.fontSizes[4]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    /* background-color: ${p => p.theme.colors.secondary}; */
  }
  transition: ${p => p.theme.transitions};
`;

export const Wrap = styled.nav`

  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  width: 300px;
  /* width: ${p => p.theme.sizes[8]}px; */
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

export const PositionBlocks = styled.div`
  display: flex;
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
`;