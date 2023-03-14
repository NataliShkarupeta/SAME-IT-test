import styled from 'styled-components';
import img from '../images/box.jpg';

export const BasicWrap = styled.div`
  box-sizing: border-box;
  /* background: url('${img}'); */
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url('${img}');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: absolute;
  width: 100%;

  @media screen and (min-width: 961px) {
    height: 900px;
  }
  @media screen and (min-width: 1120px) {
    height: 1000px;
  }
  
`;
