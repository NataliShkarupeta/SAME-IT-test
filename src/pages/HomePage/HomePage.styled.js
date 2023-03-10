import styled from 'styled-components';

export const Wrap = styled.div`
  width: 100%;
  align-items: center;

  @media screen and (${p => p.theme.media.medium}) {
    display: flex;
    flex-direction: column;
    /* padding: ${p => p.theme.space[2]}px; */
  }
  /* @media screen and (${p => p.theme.media.medium}) { */
  /* flex-direction: column; */
  /* padding: ${p => p.theme.space[3]}px; */
  /* }  */
`;
export const WrapBlock = styled.div`
  margin-top: ${p => p.theme.space[3]}px;
  display: flex;
  gap: 30px;
   @media screen and (${p => p.theme.media.medium}) {
    flex-direction: column;
    justify-content: center;
    padding: ${p => p.theme.space[3]}px;
  }  
  
`;

// export const Wrap = styled.div``;
