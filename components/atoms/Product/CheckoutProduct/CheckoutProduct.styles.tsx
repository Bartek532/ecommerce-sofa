import styled from "styled-components";

export const StyledCheckoutListItem = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 2fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 1rem;

  @media all and (min-width: 700px) {
    grid-template-columns: 1fr 3fr 1fr 2fr 1fr;
  }

  @media all and (min-width: 1000px) {
    grid-template-columns: 3fr 1fr 2fr 1fr;
  }

  @media all and (min-width: 1250px) {
    grid-template-columns: 1fr 3fr 1fr 2fr 1fr;
  }
`;

export const StyledItemImage = styled.div`
  display: none;

  @media all and (min-width: 700px) {
    display: block;
  }

  @media all and (min-width: 1000px) {
    display: none;
  }

  @media all and (min-width: 1250px) {
    display: block;
  }
`;

export const StyledItemName = styled.a`
  justify-self: start;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media all and (min-width: 700px) {
    justify-self: center;
  }
`;

export const StyledItemQuantityInputLabel = styled.label`
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const StyledItemQuantityInput = styled.input`
  padding: 0.7rem;
  font-family: inherit;
  font-size: 1.8rem;
  text-align: center;
  width: 4.5rem;

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledRemoveItemButton = styled.button`
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
`;
