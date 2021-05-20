import { memo } from "react";
import styled from "styled-components";

const StyledInputWrapper = styled.div`
  width: 24rem;
  margin: 2rem 1.5rem;
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  margin-left: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
  border-radius: 25px;
  border: 0 none;
  background-color: var(--gray-100);
  padding: 1.2rem 1.7rem;
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

type SearchInputProps = {
  readonly name?: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly value: string;
  readonly placeholder: string;
};

export const SearchInput = memo<SearchInputProps>(
  ({ name = "search", value = "", onChange, placeholder }) => {
    return (
      <StyledInputWrapper>
        <StyledLabel htmlFor="search">Search</StyledLabel>
        <StyledInput
          id="search"
          name={name}
          value={value}
          onChange={onChange}
          type="search"
          autoComplete="off"
          placeholder={placeholder}
        />
      </StyledInputWrapper>
    );
  }
);
