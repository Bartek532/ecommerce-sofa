import styled from "styled-components";

export const StyledCartListItem = styled.li`
  display: grid;
  grid-template-columns: 5fr 1fr;
  margin: 1.5rem 0;
`;

export const StyledItemDescription = styled.div``;

export const StyledItemName = styled.h3`
  font-size: 1.3rem;
`;

export const StyledItemCost = styled.span`
  font-size: 1.1rem;
`;

export const StyledRemoveItemButton = styled.button`
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
`;
