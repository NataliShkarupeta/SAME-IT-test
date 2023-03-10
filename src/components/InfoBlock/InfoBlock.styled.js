import styled from 'styled-components';


 export const Wrap = styled.div`
   width: 40%;
   height: 300px;
   /* margin: ${p => p.theme.space[0]}px; */
   padding: ${p => p.theme.space[2]}px;
   background-color: ${p => p.theme.colors.primary};
   border: ${p => p.theme.borders.normal};
   border-radius: ${p => p.theme.radii.normal};
   opacity: 0.80;
   `
 
 export const Span=styled.span`
 text-decoration: underline;
 `
 export const P = styled.p`
   font-family: ${p => p.theme.fonts.heading};
   font-size: ${p => p.theme.fontSizes[3]}px;
   font-weight: ${p => p.theme.bold};
 `;