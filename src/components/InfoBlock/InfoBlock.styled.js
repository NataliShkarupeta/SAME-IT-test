import styled from 'styled-components';


 export const Wrap = styled.div`
   width: 40%;
   /* margin: ${p => p.theme.space[0]}px; */
   padding: ${p => p.theme.space[2]}px;
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