import styled from 'styled-components';

 export const Wrap = styled.div`
   width: 40%;
   height: 300p;
   padding: ${p => p.theme.space[2]}px;
   border: ${p => p.theme.borders.normal};
   background-color: ${p => p.theme.colors.primary};
   border-radius: ${p => p.theme.radii.normal};
   overflow-y: scroll;
   opacity: 0.9;
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
 export const TakeHistory = styled.p`
   margin-top: ${p => p.theme.space[0]}px;
   text-decoration: underline;
   font-family: ${p => p.theme.fonts.heading};
   font-size: ${p => p.theme.fontSizes[3]}px;
   font-weight: ${p => p.theme.bold};
   box-shadow: 0px 1px 20px rgba(90, 49, 100, 0.226972);
   cursor: pointer;
   :hover,
   :focus {
     color: ${p => p.theme.colors.secondary};
   }

   transition: ${p => p.theme.transitions};
   @media screen and (${p => p.theme.media.large}) {
     font-size: ${p => p.theme.fontSizes[2]}px;
   }
 `;

 export const CircleButton = styled.button`
   margin: ${p => p.theme.space[1]}px;
   width: ${p => p.theme.sizes[4]}px;
   height: ${p => p.theme.sizes[4]}px;
   background-color: ${p => p.theme.colors.accent};
   border: ${p => p.theme.borders.normal};
   border-color: ${p => p.theme.colors.muted};
   :hover,
   :focus {
     background-color: ${p => p.theme.colors.secondary};
   }
   transition: ${p => p.theme.transitions};
   @media screen and (${p => p.theme.media.small}) {
     width: 27px;
     height: 27px;
   }
 `;

 export const Li = styled.li`
   display: flex;
   gap: 25px;
   align-items: center;
   font-family: ${p => p.theme.fonts.monospace};
   font-size: ${p => p.theme.fontSizes[3]}px;
   font-weight: ${p => p.theme.bold};
   cursor: pointer;
   :hover,
   :focus {
     color: ${p => p.theme.colors.background};
   }
   transition: ${p => p.theme.transitions};
   @media screen and (${p => p.theme.media.medium}) {
     margin-left: ${p => p.theme.space[4]}px;
     font-size: ${p => p.theme.fontSizes[1]}px;
     gap: 15px;
   }
   @media screen and (min-width: 721px) {
     font-size: ${p => p.theme.fontSizes[1]}px;
     gap: 15px;
   }

   @media screen and (min-width: 960px) {
     margin-left: ${p => p.theme.space[3]}px;
   }
   @media screen and (min-width: 1200px) {
     font-size: ${p => p.theme.fontSizes[3]}px;
     margin-left: ${p => p.theme.space[4]}px;
   }
 `;

 export const Ul = styled.ul`
   padding: ${p => p.theme.space[0]}px;
 `;