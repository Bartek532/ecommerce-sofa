import styled from "styled-components";

export const StyledColorSelectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem 0;

  @media all and (min-width: 520px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const StyledInputLabel = styled.label<{ isActive: boolean }>`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  padding: 0.2rem;
  border-width: 5px;
  border-color: var(--gray-100);
  border-style: ${props => (props.isActive ? "solid" : "dashed")};
  margin: 0.5rem;

  &:focus-within {
    border-color: lightgray;
  }

  @media all and (min-width: 520px) {
    margin: 0.5rem 1rem;
  }
`;

export const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

export const StyledColorPlaceholder = styled.div<{ color: string }>`
  width: 70px;
  height: 70px;
  background-color: ${props => props.color};
`;
