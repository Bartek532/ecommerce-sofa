import styled from "styled-components";
import Select from "react-select";

export const StyledInputWrapper = styled.div`
  width: 24rem;
  margin: 2rem 1.5rem;

  * {
    cursor: pointer;
  }
`;

export const StyledInput = styled(Select)`
  .Select__indicator svg path {
    fill: var(--yellow-600);
  }

  .Select__control--is-focused {
    border-color: var(--yellow-600);
    box-shadow: 0 0 0 1px var(--yellow-600);
  }
  .Select__value-container {
    padding: 0.6rem 0.8rem;
    font-size: 1.3rem;
  }

  .Select__option--is-focused {
    background-color: var(--yellow-300);
  }

  .Select__multi-value {
    background-color: var(--gray-100);

    &__label {
      padding: 0.4rem 0.7rem;
      font-size: 1.1rem;
    }
  }
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  cursor: default;
`;
