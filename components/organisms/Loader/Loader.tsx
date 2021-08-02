import { useMainContext } from "context/MainContext";
import { StyledSpinnerWrapper, StyledSpinner } from "./Loader.styles";

export const Loader = () => {
  const { loading } = useMainContext();

  if (!loading) {
    return null;
  }

  return (
    <StyledSpinnerWrapper>
      <span className="sr-only">Loading...</span>
      <StyledSpinner />
    </StyledSpinnerWrapper>
  );
};
