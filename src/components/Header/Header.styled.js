import styled from "styled-components";

export const P = styled.p`
  display: block;
  margin: ${p => p.theme.space[0]}px;
  background: linear-gradient(180deg, #600398 0%, #b00cc8 100%);
  box-shadow: 0px 1px 20px rgba(90, 49, 100, 0.226972);
  padding: ${p => p.theme.space[4]}px;
  font-family: ${p => p.theme.fonts.monospace};
  line-height: ${p => p.theme.lineHeights.heading};
  font-weight: ${p => p.theme.heading};
  color: ${p => p.theme.colors.primary};
  border-bottom: ${p => p.theme.borders.normal};
  @media screen and (${p => p.theme.media.small}) {
    display: block;
    height: ${p => p.theme.space[5]}px;
    padding: ${p => p.theme.space[3]}px;
    font-size: ${p => p.theme.fontSizes[3]}px;
    font-weight: ${p => p.theme.bold};
    text-align: center;
  }
  @media screen and (min-width: 541px) {
    text-align: center;
    height: ${p => p.theme.space[4]}px;
    font-size: ${p => p.theme.fontSizes[4]}px;
  }

  @media screen and (min-width: 721px) {
    font-size: ${p => p.theme.fontSizes[5]}px;
    text-align: left;
    height: ${p => p.theme.space[5]}px;
  }
  @media screen and (min-width: 960px) {
    font-size: ${p => p.theme.fontSizes[6]}px;
    height: ${p => p.theme.space[6]}px;
    /* margin-left: ${p => p.theme.space[4]}px; */
  }
`;
