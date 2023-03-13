import styled from 'styled-components';

export const WrapButtons = styled.div`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  margin-top: ${p => p.theme.space[2]}px;
  display: flex;
 justify-content: flex-start;
  gap: 20px;
  
`;

export const Wrap = styled.div`
  padding: ${p => p.theme.space[2]}px;
  background-color: ${p => p.theme.colors.primary};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};

  opacity: 0.8;
  overflow-y: scroll;
  @media screen and (${p => p.theme.media.small}) {
    align-items: center;
    height: 300px;
    width: 270px;
  }
  @media screen and (min-width: 541px) {
    width: 450px;
    height: 335px;
  }
  @media screen and (min-width: 721px) {
    width: 410px;
    height: 330px;
  }

  @media screen and (min-width: 961px) {
    width: 400px;
    height: 330px;
  }
  @media screen and (min-width: 1141px) {
    width: 440px;
     height: 400px; 
  }
`;


export const WrapAll = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  @media screen and (${p => p.theme.media.extraLarge}) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ButtonCity = styled.button`
  /* height: 35px; */
  width: 35px;
  background-color: ${p => p.theme.colors.accent};
  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  color: ${p => p.theme.colors.primary};
  border-color: ${p => p.theme.colors.muted};

  :hover,
  :focus {
    /* color: ${p => p.theme.colors.primary}; */
    background-color: ${p => p.theme.colors.secondary};
    /* border-color: ${p => p.theme.colors.muted}; */
  }

  transition: ${p => p.theme.transitions};
`;

export const H3 = styled.h3`
  font-family: ${p => p.theme.fonts.heading};
  /* font-size: ${p => p.theme.fontSizes[4]}px; */
  line-height: ${p => p.theme.lineHeights.heading};
  color: ${p => p.theme.colors.primary};
  font-weight: ${p => p.theme.fontWeights.body};
  -webkit-text-shadow: -6px -1px 2px rgba(101, 38, 135, 0.44);
  -moz-text-shadow: -6px -1px 2px rgba(101, 38, 135, 0.44);
  text-shadow: -6px -1px 2px rgba(101, 38, 135, 0.44);

  display: block;
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[0]}px;
  @media screen and (${p => p.theme.media.medium}) {
    font-size: ${p => p.theme.fontSizes[1]}px;
  }
  @media screen and (min-width: 721px) {
    font-size: ${p => p.theme.fontSizes[2]}px;
  }

  @media screen and (min-width: 961px) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
  @media screen and (min-width: 1201px) {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;


export const Block = styled.div`
  width: 40%;
  display: flex;
  gap: 20px;
  flex-direction: column;
  @media screen and (${p => p.theme.media.extraLarge}) {
    width: 95%;
    align-items: center;
  }
`;
export const Form = styled.form`
  display: flex;
  gap: 20px;
`;
