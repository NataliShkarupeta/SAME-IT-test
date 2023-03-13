import styled from 'styled-components';

 export const Footer = styled.footer`
   padding: ${p => p.theme.space[1]}px;
   padding-left: ${p => p.theme.space[3]}px;
   flex: 0 0 auto;
   height: ${p => p.theme.sizes[6]}px;
   background-color: 1px 52px 1px rgba(132, 113, 142, 0.5);
   border-top: ${p => p.theme.borders.normal};
   box-shadow: 1px 0px 8px rgba(238, 238, 238, 0.91);
   border-color: ${p => p.theme.colors.muted};
   @media screen and (${p => p.theme.media.large}) {
     height: ${p => p.theme.sizes[5]}px;
   }
 `;

  export const Span = styled.span`
    display: flex;
    align-items: center;
    font-weight: ${p => p.theme.fontWeights.bold};
    text-shadow: 1px 0px 8px rgba(238, 238, 238, 0.91);
    @media screen and (${p => p.theme.media.medium}) {
      font-size: 13px;
      flex-direction: column;
    }
  `;
