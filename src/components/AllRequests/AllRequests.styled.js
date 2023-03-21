import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

 export const Ul = styled.ul`
   list-style: none;
   border-bottom: 0.1px solid;
   border-color: ${p => p.theme.colors.text};
   margin-top: ${p => p.theme.space[2]}px;
   margin-bottom: ${p => p.theme.space[2]}px;
   padding: ${p => p.theme.space[3]}px;
   display: flex;
   gap: 20px;
   justify-content: space-evenly;
   align-items: center;
   flex-wrap: wrap;
   @media screen and (${p => p.theme.media.medium}) {
     margin-top: ${p => p.theme.space[1]}px;
   }
   @media screen and (min-width: 721px) {
     margin-top: ${p => p.theme.space[4]}px;
   }
   @media screen and (min-width: 961px) {
     margin-top: ${p => p.theme.space[2]}px;
   }
 `;



  export const Li = styled.li`
  

  `;
  export const AllRequestsLink = styled(NavLink)`
    text-decoration: none;
    color: ${p => p.theme.colors.primary};
    padding: ${p => p.theme.space[2]}px;
    height: ${p => p.theme.sizes[3]}px;
    width: ${p => p.theme.sizes[6]}px;
    background-color: ${p => p.theme.colors.accent};
    border: ${p => p.theme.borders.normal};
    border-radius: ${p => p.theme.radii.normal};
    border-color: ${p => p.theme.colors.muted};
    box-shadow: 1px 0px 8px rgba(238, 238, 238, 0.91);

    font-family: ${p => p.theme.fonts.monospace};
    line-height: ${p => p.theme.lineHeights.body};
    font-size: ${p => p.theme.fontSizes[2]}px;
    display: flex;
    align-items: center;
    justify-content: center;
    :hover,
    :focus {
      background-color: ${p => p.theme.colors.secondary};
      transform: scale(1.2);
    }
    transition: ${p => p.theme.transitions};
    @media screen and (${p => p.theme.media.medium}) {
      width: ${p => p.theme.sizes[5]}px;
      height: ${p => p.theme.sizes[2]}px;
      font-size: ${p => p.theme.fontSizes[1]}px;
    }
    &.active {
      background-color: ${p => p.theme.colors.accent};
    }
  `;

  export const LiActive = styled.li`
  
  `;