import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { CartList } from "./List/CartList";

const StyledCartWrapper = styled.div`
  position: relative;
  margin-right: 1.7rem;
`;

const StyledCartButton = styled.button`
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  font-family: inherit;
`;

const StyledCartProductsCount = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-27%, -40%);
  font-size: 1.5rem;
  user-select: none;

  @media all and (min-width: 1000px) {
    font-size: 1.3rem;
  }
`;

const StyledCartListWrapper = styled.div`
  position: absolute;
  top: 5.5rem;
  right: -8rem;
`;

export const Cart = () => {
  const { cartItems, getTotalQuantity } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <StyledCartWrapper>
      <StyledCartButton onClick={() => setIsCartOpen(open => !open)}>
        <Image src="/svg/cart.svg" width="50" height="50" alt="cart" />
        <StyledCartProductsCount>
          {getTotalQuantity() > 99 ? "99" : getTotalQuantity()}
        </StyledCartProductsCount>
      </StyledCartButton>

      {isCartOpen ? (
        <StyledCartListWrapper>
          <CartList cartItems={cartItems} />
        </StyledCartListWrapper>
      ) : null}
    </StyledCartWrapper>
  );
};
