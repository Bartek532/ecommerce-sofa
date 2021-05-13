import { HeroLink } from "../atoms/Link/HeroLink";
import { StyledButton } from "../atoms/Button/Button";
import styled from "styled-components";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 3.2rem;
`;

export const Header = () => {
  return (
    <StyledHeader>
      <HeroLink />
      <StyledButton>logout</StyledButton>
    </StyledHeader>
  );
};
