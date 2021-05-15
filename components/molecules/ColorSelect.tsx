import { memo } from "react";
import styled from "styled-components";
import { sofaColors } from "../../lib/utils/consts";

type ColorSelectProps = {
  name?: string;
  onChange: any;
};

const StyledColorSelectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem 0;

  @media all and (min-width: 520px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledInputLabel = styled.label`
  display: block;
  position: relative;
  cursor: pointer;
  user-select: none;
  padding: 0.2rem;
  border: 5px dashed var(--gray-100);
  margin: 0.5rem;

  @media all and (min-width: 520px) {
    margin: 0.5rem 1rem;
  }
`;

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const StyledColorField = styled.div<{ color: string }>`
  width: 70px;
  height: 70px;
  background-color: ${props => props.color};
`;

export const ColorSelect = memo<ColorSelectProps>(({ name, onChange }) => {
  return (
    <StyledColorSelectWrapper onChange={onChange}>
      {sofaColors.map(color => {
        return (
          <StyledInputLabel key={color.label}>
            <span className="sr-only">{color.label}</span>
            <StyledInput type="radio" value={color.label} name={name} />
            <StyledColorField color={"#" + color.color1}></StyledColorField>
          </StyledInputLabel>
        );
      })}
    </StyledColorSelectWrapper>
  );
});
