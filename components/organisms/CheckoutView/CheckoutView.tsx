import { Hero } from "components/organisms/Hero/Hero";
import { CheckoutList } from "components/molecules/List/CheckoutList/CheckoutList";
import { useCart } from "context/CartContext";
import { useWindowSize } from "lib/utils/hooks";
import { Header } from "components/molecules/Header/Header";
import { StyledCheckoutViewWrapper } from "./CheckoutView.styles";

export const CheckoutView = () => {
  const { cartItems } = useCart();
  const { width } = useWindowSize();
  return (
    <StyledCheckoutViewWrapper>
      {width && width < 1000 ? <Header /> : <Hero isHome={false} />}
      <CheckoutList cartItems={cartItems} />
    </StyledCheckoutViewWrapper>
  );
};
