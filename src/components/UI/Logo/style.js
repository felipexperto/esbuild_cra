import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
`;
export const Logo = styled.div`
  align-items: stretch;
  flex-direction: row;
  display: flex;

  & > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-left: 3rem;
  }
`;
