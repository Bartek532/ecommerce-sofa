import { memo, useEffect } from "react";
import { sofaColors } from "lib/utils/consts";
import { useProduct } from "context/ProductContext";
import {
  StyledColorSelectWrapper,
  StyledInputLabel,
  StyledInput,
  StyledColorPlaceholder,
} from "./ColorSelect.styles";

type ColorSelectProps = {
  readonly name?: string;
  readonly onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

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
