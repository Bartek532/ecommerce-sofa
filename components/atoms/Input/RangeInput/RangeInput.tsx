import { memo } from "react";
import {
  StyledInputWrapper,
  StyledLabel,
  StyledInput,
} from "./RangeInput.styles";

type RangeInputProps = {
  readonly name?: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  readonly minPrice: number;
  readonly maxPrice: number;
  readonly price: number;
  readonly step?: number;
};

export const RangeInput = memo<RangeInputProps>(
  ({
    name = "range",
    minPrice = 0,
    maxPrice = 2000,
    price = 350,
    step = 1,
    onChange,
  }) => {
    return (
      <StyledInputWrapper>
        <StyledLabel htmlFor="range">
          Price between: ${minPrice} - ${price}
        </StyledLabel>
        <StyledInput
          id="range"
          name={name}
          value={price}
          min={minPrice}
          max={maxPrice}
          step={step}
          onChange={onChange}
          type="range"
        />
      </StyledInputWrapper>
    );
  }
);
