import styled from "styled-components";
import { Hero } from "./Hero";
import { CheckoutList } from "../molecules/List/CheckoutList";
import { useCart } from "../../context/CartContext";
import { useWindowSize } from "../../lib/utils/hooks";
import { Header } from "../molecules/Header";

const StyledCheckoutViewWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  @media all and (min-width: 1000px) {
    flex-flow: row nowrap;
  }
`;

export const CheckoutView = () => {
  const { cartItems } = useCart();
  const { width } = useWindowSize();
  return (
    <StyledCheckoutViewWrapper>
      {width < 1000 ? <Header /> : <Hero isHome={false} />}
      <CheckoutList cartItems={cartItems} />
    </StyledCheckoutViewWrapper>
  );
};
