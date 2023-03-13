import styled from 'styled-components';
import img from '../images/box.jpg';

export const BasicWrap = styled.div`
  box-sizing: border-box;
  background-image: url('${img}');
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;

  height: 100vh;
  /* height: 100%; */
 
`;

