import styled from 'styled-components';

export const P = styled.div`
  display: block;
  color: ${p => p.theme.colors.primary};
  border-bottom: ${p => p.theme.borders.normal};
  @media screen and (${p => p.theme.media.small}) {
    height: ${p => p.theme.space[6]}px;
    padding: ${p => p.theme.space[0]}px;
    text-align: center;
  }
  @media screen and (min-width: 541px) {
    text-align: center;
    padding: ${p => p.theme.space[4]}px;
    height: ${p => p.theme.space[5]}px;
  }

  @media screen and (min-width: 721px) {
    padding: ${p => p.theme.space[4]}px;
    text-align: left;
    height: ${p => p.theme.space[5]}px;
  }
  @media screen and (min-width: 960px) {
  }
`;

export const Block = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: ${p => p.theme.space[1]}px;
  height: ${p => p.theme.sizes[4]}px;
`;
export const CheckboxWrap = styled.div`
  display: flex;
  align-items: center;
`;
export const SpanRequests = styled.span`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.body};
  color: ${p => p.theme.colors.primary};
`;

export const Span = styled.span`
  border-bottom: ${p => p.theme.borders.normal};
  border-color: ${p => p.theme.colors.secondary};
  display: block;
  padding-bottom: ${p => p.theme.space[3]}px;
  font-family: ${p => p.theme.fonts.heading};
  line-height: ${p => p.theme.lineHeights.body};
  color: ${p => p.theme.colors.primary};
  padding-bottom: ${p => p.theme.space[2]}px;
  @media screen and (${p => p.theme.media.small}) {
    display: block;
    font-size: ${p => p.theme.fontSizes[2]}px;
    font-weight: ${p => p.theme.bold};
    text-align: center;
  }
  @media screen and (min-width: 541px) {
    text-align: center;
    padding-top: ${p => p.theme.space[1]}px;
    font-size: ${p => p.theme.fontSizes[3]}px;
  }

  @media screen and (min-width: 721px) {
    font-size: ${p => p.theme.fontSizes[3]}px;
    text-align: left;
  }
  @media screen and (min-width: 960px) {
    font-size: ${p => p.theme.fontSizes[5]}px;
    padding-bottom: ${p => p.theme.space[2]}px;
  }
`;
export const SpanSecond = styled.span`
  font-size: ${p => p.theme.fontSizes[1]}px;
  padding: ${p => p.theme.space[0]}px;
  color: #dfbde4;
  @media screen and (${p => p.theme.media.small}) {
    font-family: ${p => p.theme.fonts.monospace};
    line-height: ${p => p.theme.lineHeights.body};
    font-weight: ${p => p.theme.fontWeights.body};
    -webkit-text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.97);
    -moz-text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.97);
    text-shadow: 1px 1px 0px rgba(0, 0, 0, 0.97);
    text-align: center;
  }
  @media screen and (min-width: 541px) {
    text-align: center;
  }

  @media screen and (min-width: 721px) {
    text-align: left;
  }
  @media screen and (min-width: 960px) {
    font-size: ${p => p.theme.fontSizes[3]}px;
  }
`;
export const Logo = styled.p`
  padding: ${p => p.theme.space[1]}px;
  -webkit-text-shadow: 1px 0px 8px rgba(238, 238, 238, 0.91);
  -moz-text-shadow: 1px 0px 8px rgba(238, 238, 238, 0.91);
  text-shadow: 1px 0px 8px rgba(238, 238, 238, 0.91);
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.heading};
`;
export const WrapLogoAndImg = styled.div`
  margin-left: ${p => p.theme.space[2]}px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 0.5 solid;
  box-shadow: rgb(14 12 200 / 0%) 0px 0px 1px, rgb(0 0 0 / 37%) 0px 3px 7px,
    rgb(80 82 162 / 0%) 0px 1px inset, rgb(128 19 179 / 0%) 0px -3px 2px inset;
  @media screen and (${p => p.theme.media.small}) {
    width: ${p => p.theme.sizes[6]}px;
  }
`;
export const Img = styled.img`
  padding: ${p => p.theme.space[1]}px;
  width: ${p => p.theme.sizes[4]}px;
  height: ${p => p.theme.sizes[4]}px;
`;
export const Input = styled.input`
  cursor: pointer;
 
`;

export const WrapHeader = styled.div`
  background: linear-gradient(180deg, #600398 0%, #b00cc8 100%);
  box-shadow: 0px 1px 20px rgba(90, 49, 100, 0.226972);
  display: flex;

  @media screen and (min-width: 541px) {
    height: ${p => p.theme.space[6]}px;
  }
`;
