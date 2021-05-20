import { memo } from "react";
import styled from "styled-components";

const StyledInputWrapper = styled.div`
  width: 24rem;
  margin: 2rem 1.5rem;
`;

const StyledInput = styled.input`
  cursor: pointer;
  width: 100%;
  -webkit-appearance: none;
  background: none;
  cursor: pointer;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: var(--yellow-600);
    position: relative;
    cursor: pointer;
    margin-top: -6.5px;
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: var(--yellow-600);
    position: relative;
    cursor: pointer;
    margin-top: -6.5px;
  }

  &::-ms-thumb {
    -webkit-appearance: none;
    border: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-color: var(--yellow-600);
    position: relative;
    cursor: pointer;
    margin-top: -6.5px;
  }

  &::-webkit-slider-runnable-track {
    height: 5px;
    background-color: var(--gray-100);
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  &::-moz-range-track {
    height: 5px;
    background-color: var(--gray-100);
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }

  &::-ms-track {
    height: 5px;
    background-color: var(--gray-100);
    border: none;
    border-radius: 2px;
    cursor: pointer;
  }
`;

const StyledLabel = styled.label`
  display: block;
  font-size: 1.35rem;
  font-weight: 600;
  margin-bottom: 0.6rem;
`;

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
