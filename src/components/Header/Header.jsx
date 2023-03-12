import {
  P,
  Block,
  Logo,
  WrapHeader,
  Img,
  WrapLogoAndImg,
  Span,
  SpanSecond,
} from './Header.styled';
import img from '../../images/dove.png';
import { ImRocket } from 'react-icons/im';
// GiRocketFlight;import { IconName } from "react-icons/gi"
// ImRocket;import { IconName } from "react-icons/im";
export const Header = () => {
  return (
    <>
      <Block></Block>
      <WrapHeader>
        <WrapLogoAndImg>
          <Img src={img} alt="Україна назавжди!" />
          <Logo>
            Під <br />
            Контролем
          </Logo>
        </WrapLogoAndImg>

        <P>
          {' '}
          <Span>Зручне отримання інформації по Вашому запиту! </Span> 
          <SpanSecond>
            {' '}
            Наші запити літають так само швидко як Привид Києва <ImRocket />
          </SpanSecond>
        </P>
        <Block></Block>
      </WrapHeader>
    </>
  );
};
