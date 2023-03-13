import styled from 'styled-components';

export const Wrap = styled.div`
 
  width: 100%;
  align-items: center;

  @media screen and (${p => p.theme.media.medium}) {
    flex-direction: column;
    display: flex;
  }
`;
export const WrapBlock = styled.div`
  margin-top: ${p => p.theme.space[3]}px;
  display: flex;
  gap: 20px;
  @media screen and (${p => p.theme.media.medium}) {
    flex-direction: column;
    /* justify-content: center; */
    padding: ${p => p.theme.space[3]}px;
  }
  @media screen and (min-width: 721px) {
    justify-content: center;
    gap: 30;
  }
  @media screen and (min-width: 961px) {
    justify-content: flex-start;
    gap: 30;
  }
`;

// export const Wrap = styled.div``;
