import styled from 'styled-components';

export const Wrap = styled.div`
  width: 50%;
  padding: ${p => p.theme.space[2]}px;
  /* margin: ${p => p.theme.space[0]}px; */
  /* background-color: ${p => p.theme.colors.accent}; */
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  /* :hover,
   :focus {
     color: ${p => p.theme.colors.accent};
     background-color: ${p => p.theme.colors.secondary};
   }

   transition: ${p => p.theme.transitions}; */
`;
