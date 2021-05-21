import { memo } from "react";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
} from "./SelectInput.styles";

type SelectInputProps = {
  readonly options: { value: string; label: string }[];
  readonly name?: string;
  readonly onChange: (options: { value: string; label: string }[]) => void;
};

export const SelectInput = memo<SelectInputProps>(
  ({ options, name = "types", onChange }) => {
    return (
      <StyledInputWrapper>
        <StyledLabel htmlFor="select">Select type</StyledLabel>
        <StyledInput
          options={options}
          isMulti
          name={name}
          classNamePrefix={"Select"}
          id="select"
          isClearable={false}
          onChange={onChange}
        />
      </StyledInputWrapper>
    );
  }
);

SelectInput.displayName = "SelectInput";
