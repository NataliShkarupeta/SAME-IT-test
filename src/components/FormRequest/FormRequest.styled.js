import styled from 'styled-components';

export const Form = styled.form`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.body};

`;

export const Input = styled.input`
display: block;
height: 20px;
width: 300px;

`;


export const Button = styled.button`
  height: 25px;
  /* background-color: ${p => p.theme.colors.background}; */
  :hover,
  :focus {
    color: ${p => p.theme.colors.accent};
    /* background-color: ${p => p.theme.colors.primary}; */
    border-color: ${p => p.theme.colors.muted};
  }

  transition: ${p => p.theme.transitions};
`;