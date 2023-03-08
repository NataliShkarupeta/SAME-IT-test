import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavigationLink = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};

  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.secondary};
  }
  transition: ${p => p.theme.transitions};
`;

export const Wrap = styled.nav`
  margin-top: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;