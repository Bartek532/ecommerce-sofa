import { memo, useEffect } from "react";
import styled from "styled-components";
import { sofaColors } from "../../lib/utils/consts";
import { useProduct } from "../../context/ProductContext";

type ColorSelectProps = {
  readonly name?: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const StyledColorSelectWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem 0;

  @media all and (min-width: 520px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledInputLabel = styled.label<{ isActive: boolean }>`
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

const StyledInput = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;

const StyledColorPlaceholder = styled.div<{ color: string }>`
  width: 70px;
  height: 70px;
  background-color: ${props => props.color};
`;

export const ColorSelect = memo<ColorSelectProps>(({ name, onChange }) => {
  const { activeSofaColor, setActiveSofaColor } = useProduct();

  useEffect(() => {
    return () => {
      setActiveSofaColor("default");
    };
  }, []);
  return (
    <StyledColorSelectWrapper>
      {sofaColors.slice(1).map(color => {
        return (
          <StyledInputLabel
            key={color.label}
            isActive={activeSofaColor === color.label}
          >
            <span className="sr-only">{color.label}</span>
            <StyledInput
              type="checkbox"
              value={color.label}
              name={name}
              onChange={onChange}
              checked={activeSofaColor === color.label}
            />
            <StyledColorPlaceholder
              color={"#" + color.palette.main}
            ></StyledColorPlaceholder>
          </StyledInputLabel>
        );
      })}
    </StyledColorSelectWrapper>
  );
});
