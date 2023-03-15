import styled from 'styled-components';

 export const Footer = styled.footer`
   margin-top: ${p => p.theme.space[5]}px;
   padding: ${p => p.theme.space[1]}px;
   padding-left: ${p => p.theme.space[3]}px;
   flex: 0 0 auto;
   height: ${p => p.theme.sizes[7]}px;
   /* border-top: ${p => p.theme.borders.normal}; */
   box-shadow: 1px 0px 8px rgba(238, 238, 238, 0.91);
   /* border-color: ${p => p.theme.colors.muted}; */
   @media screen and (${p => p.theme.media.large}) {
     height: ${p => p.theme.sizes[5]}px;
   }
   @media screen and (min-width: 721px) {
     margin-top: ${p => p.theme.space[5]}px;
   }
   @media screen and (min-width: 961px) {
     margin-top: ${p => p.theme.space[7]}px;
   }
 `;

  export const Span = styled.span`
    padding-top: ${p => p.theme.space[3]}px;
    justify-content: center;
    color: ${p => p.theme.colors.primary};
    display: flex;
    align-items: center;
    font-weight: ${p => p.theme.fontWeights.body};
    /* text-shadow: 1px 0px 8px rgba(238, 238, 238, 0.91); */
    @media screen and (${p => p.theme.media.medium}) {
      font-size: 13px;
      flex-direction: column;
    }
  `;
