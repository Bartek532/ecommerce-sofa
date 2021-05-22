import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.2rem 0 3.2rem;
`;

export const StyledRightPannelWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledBasketWrapper = styled.div`
  display: none;
  @media all and (min-width: 380px) {
    display: block;
  }
`;
