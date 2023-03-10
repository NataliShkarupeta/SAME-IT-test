import styled from 'styled-components';

export const Form = styled.form`
  font-family: ${p => p.theme.fonts.monospace};
  font-size: ${p => p.theme.fontSizes[5]}px;
  font-weight: ${p => p.theme.fontWeights.body};

`;

export const Input = styled.input`
  display: block;
  height: 30px;
  width: 300px;
  font-size: ${p => p.theme.fontSizes[2]}px;
  font-family: ${p => p.theme.fonts.monospace};
  
  font-weight: ${p => p.theme.bold};
`;


export const Button = styled.button`
  height: 25px;
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