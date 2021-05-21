import styled from "styled-components";

export const StyledCartWrapper = styled.div`
  position: relative;
  margin-right: 1.7rem;
`;

export const StyledCartButton = styled.button`
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  font-family: inherit;
`;

export const StyledCartProductsCount = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-27%, -40%);
  font-size: 1.5rem;
  user-select: none;

  @media all and (min-width: 1000px) {
    font-size: 1.3rem;
  }
`;

export const StyledCartListWrapper = styled.div`
  position: absolute;
  top: 5.5rem;
  right: -8rem;
`;
