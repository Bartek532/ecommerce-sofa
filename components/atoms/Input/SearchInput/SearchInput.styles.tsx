import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  width: 24rem;
  margin: 2rem 1.5rem;
`;

export const StyledLabel = styled.label`
  display: block;
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  margin-left: 0.5rem;
`;

export const StyledInput = styled.input`
  width: 100%;
  border-radius: 25px;
  border: 0 none;
  background-color: #f0f2f5;
  padding: 1rem 1.7rem;
  font-size: 1.55rem;
  outline: 0 none;
  appearance: none;

  &:focus {
    box-shadow: 0 0 0 1.5px var(--yellow-600);
  }

  ::placeholder {
    letter-spacing: 0.8px;
  }
`;
