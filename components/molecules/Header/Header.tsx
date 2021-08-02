import { HeroLink } from "components/atoms/Link/HeroLink/HeroLink";
import { StyledButton } from "components/atoms/Button/Button.styles";
import { auth } from "lib/firebase";
import { useRouter } from "next/router";
import { Cart } from "Cart/Cart";
import {
  StyledHeader,
  StyledRightPannelWrapper,
  StyledBasketWrapper,
} from "./Header.styles";

export const Header = () => {
  const router = useRouter();
  const handleLogout = () => {
    auth.signOut();
    return router.push("/login");
  };
  return (
    <StyledHeader>
      <HeroLink />
      <StyledRightPannelWrapper>
        <StyledBasketWrapper>
          <Cart />
        </StyledBasketWrapper>
        <StyledButton onClick={handleLogout}>logout</StyledButton>
      </StyledRightPannelWrapper>
    </StyledHeader>
  );
};
