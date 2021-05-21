import styled from "styled-components";

export const StyledProductViewWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  @media all and (min-width: 1000px) {
    flex-flow: row nowrap;
  }
`;
