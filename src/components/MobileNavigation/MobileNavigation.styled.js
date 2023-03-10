import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MobileLink = styled(NavLink)`
  display: block;
  background-color: ${p => p.theme.colors.secondary};
  padding: ${p => p.theme.space[1]}px;
  border-radius: ${p => p.theme.radii.normal};
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.body};
  text-decoration: none;
  color: ${p => p.theme.colors.primary};

  :hover,
  :focus {
    background-color: ${p => p.theme.colors.accent};
  }
  transition: ${p => p.theme.transitions};
`;
export const Wrap = styled.nav`
  display: flex;
  justify-content: center;
  gap: 40px;
  @media screen and (${p => p.theme.media.medium}) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;
