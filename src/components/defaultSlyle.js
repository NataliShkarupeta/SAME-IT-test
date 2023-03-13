import styled from 'styled-components';
import img from '../images/box.jpg';

export const BasicWrap = styled.div`
  box-sizing: border-box;
  background: url('${img}');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: absolute;
  width: 100%;
  height: 850px;
  /* max-width: 100vh; */
  /* max-height: 100%; */
`;
