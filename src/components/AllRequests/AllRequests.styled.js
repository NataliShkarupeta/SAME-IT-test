import styled from 'styled-components';

 export const Ul = styled.ul`
   margin-top: ${p => p.theme.space[2]}px;
   margin-bottom: ${p => p.theme.space[2]}px;
   padding: ${p => p.theme.space[3]}px;
   display: flex;
   gap: 20px;
   justify-content: space-evenly;
   align-items: center;
   flex-wrap: wrap;
   @media screen and (${p => p.theme.media.medium}) {
     margin-top: ${p => p.theme.space[4]}px;
   }
   @media screen and (min-width: 721px) {
     margin-top: ${p => p.theme.space[4]}px;
   }
   @media screen and (min-width: 961px) {
     margin-top: ${p => p.theme.space[5]}px;
   }
 `;

  export const Li = styled.li`
    padding: ${p => p.theme.space[2]}px;
    height: ${p => p.theme.sizes[3]}px;
    background-color: ${p => p.theme.colors.accent};
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    border-color: ${p => p.theme.colors.muted};
    color: ${p => p.theme.colors.primary};
    font-family: ${p => p.theme.fonts.monospace};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    display: flex;
    align-items: center;
    :hover,
    :focus {
      background-color: ${p => p.theme.colors.secondary};
    }
    transition: ${p => p.theme.transitions};
    @media screen and (${p => p.theme.media.medium}) {
      height: ${p => p.theme.sizes[2]}px;
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
  `;

  export const LiActive = styled.li`
    background-color: ${p => p.theme.colors.secondary};
    padding: ${p => p.theme.space[2]}px;
    height: ${p => p.theme.sizes[3]}px;
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    border-color: ${p => p.theme.colors.muted};
    color: ${p => p.theme.colors.primary};
    font-family: ${p => p.theme.fonts.monospace};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    display: flex;
    align-items: center;
    :hover,
    :focus {
      background-color: ${p => p.theme.colors.secondary};
    }
    transition: ${p => p.theme.transitions};
    @media screen and (${p => p.theme.media.medium}) {
      height: ${p => p.theme.sizes[2]}px;
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
  `;