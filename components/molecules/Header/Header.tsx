import { HeroLink } from "components/atoms/Link/HeroLink/HeroLink";
import { StyledButton } from "components/atoms/Button/Button.styles";
import { auth } from "lib/firebase";
import { useRouter } from "next/router";
import { StyledHeader } from "./Header.styles";

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
