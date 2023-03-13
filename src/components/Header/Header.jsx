import {
  P,
  Block,
  Logo,
  WrapHeader,
  Img,
  WrapLogoAndImg,
  Span,
  SpanSecond,
  CheckboxWrap,
  Input,
  SpanRequests,
} from './Header.styled';
import img from '../../images/dove.png';
import { ImRocket } from 'react-icons/im';
import { toggleTheme } from 'redux/theme/themeSlice';
import { useDispatch } from 'react-redux';
// GiRocketFlight;import { IconName } from "react-icons/gi"
// ImRocket;import { IconName } from "react-icons/im";
export const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Block>
        <CheckboxWrap>
          <SpanRequests id="checkbox__lightt">Всі запити</SpanRequests>
          <label id="switch">
            <Input
              type="checkbox"
              onClick={e => {
                e.stopPropagation();
                const checked = e.target;
                if (checked) {
                  dispatch(toggleTheme());
                }
              }}
            />
          </label>
        </CheckboxWrap>
      </Block>
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
