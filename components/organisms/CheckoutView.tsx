import styled from "styled-components";
import { Hero } from "./Hero";
import { CheckoutList } from "../atoms/List/CheckoutList";
import { useCart } from "../../context/CartContext";

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
  return (
    <StyledCheckoutViewWrapper>
      <Hero isHome={false} />
      <CheckoutList cartItems={cartItems} />
    </StyledCheckoutViewWrapper>
  );
};
