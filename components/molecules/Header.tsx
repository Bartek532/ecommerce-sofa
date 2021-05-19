import { HeroLink } from "../atoms/Link/HeroLink";
import { StyledButton } from "../atoms/Button/Button";
import styled from "styled-components";
import { auth } from "../../lib/firebase";
import { useRouter } from "next/router";

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3.2rem 0 3.2rem;
`;

export const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    auth.signOut();
    return router.push("/login");
  };
  return (
    <StyledHeader>
      <HeroLink />
      <StyledButton onClick={handleLogout}>logout</StyledButton>
    </StyledHeader>
  );
};
