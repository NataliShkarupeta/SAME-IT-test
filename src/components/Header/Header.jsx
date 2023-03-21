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
  SpanRequestsHide,
} from './Header.styled';
import img from '../../images/dove.png';
import { ImRocket } from 'react-icons/im';
import { toggleTheme } from 'redux/allrequests/allrequestsSlice';
import { useDispatch } from 'react-redux';
// GiRocketFlight;import { IconName } from "react-icons/gi"
// ImRocket;import { IconName } from "react-icons/im";
export const Header = () => {
  const dispatch = useDispatch();

  return (
    <>
      <Block>
        <CheckboxWrap>
          <SpanRequestsHide id="checkbox__lightt">Сховати</SpanRequestsHide>
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
          <Span>Зручне отримання інформації по Вашому запиту </Span>
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
