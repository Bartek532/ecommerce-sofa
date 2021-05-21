import { memo } from "react";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
} from "./SearchInput.styles";

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
