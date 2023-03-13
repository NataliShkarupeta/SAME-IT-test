import styled from 'styled-components';

export const SpanP = styled.span`
  font-weight: ${p => p.theme.fontWeights.bold};
`

 export const Wrap = styled.div`
   width: 40%;
   height: 300px;
   /* margin: ${p => p.theme.space[0]}px; */
   padding: ${p => p.theme.space[2]}px;
   background-color: ${p => p.theme.colors.primary};
   border: ${p => p.theme.borders.normal};
   border-radius: ${p => p.theme.radii.normal};
   opacity: 0.8;
   overflow-y: scroll;
   @media screen and (${p => p.theme.media.medium}) {
     margin: ${p => p.theme.space[0]}px;
     width: 95%;
     height: 150px;
   }
   @media screen and (min-width: 721px) {
     width: 170px;
   }
   @media screen and (min-width: 961px) {
     width: 40%;
   }
 `;
 
 export const Span=styled.span`
 text-decoration: underline;
 `
 export const P = styled.p`
   margin-top: ${p => p.theme.space[0]}px;
   margin-bottom: ${p => p.theme.space[2]}px;
   font-family: ${p => p.theme.fonts.heading};

   font-weight: ${p => p.theme.fontWeights.body};
   @media screen and (${p => p.theme.media.large}) {
     font-size: ${p => p.theme.fontSizes[1]}px;
   }

   @media screen and (min-width: 1200px) {
     font-size: ${p => p.theme.fontSizes[3]}px;
   }
 `;