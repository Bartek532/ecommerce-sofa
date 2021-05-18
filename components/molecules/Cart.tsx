import Image from "next/image";
import styled from "styled-components";
import { useState } from "react";
import { useCart } from "../../context/CartContext";
import { CartList } from "../atoms/List/CartList";

const StyledCartIconWrapper = styled.div`
  position: relative;
  margin-right: 1.7rem;
`;

const StyledCartButton = styled.button`
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
  font-family: inherit;
`;

const StyledCartCount = styled.span`
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

const StyledCartList = styled.div`
  position: absolute;
  top: 5.5rem;
  right: -8rem;
`;

export const Cart = () => {
  const { cartItems } = useCart();
  const [isCartOpen, setIsCartOpen] = useState(false);
  return (
    <StyledCartIconWrapper>
      <StyledCartButton onClick={() => setIsCartOpen(prev => !prev)}>
        <Image src="/svg/cart.svg" width="50" height="50" alt="cart" />
        <StyledCartCount>
          {cartItems.reduce((acc, { quantity }) => acc + quantity, 0)}
        </StyledCartCount>
      </StyledCartButton>

      {isCartOpen ? (
        <StyledCartList>
          <CartList cartItems={cartItems} />
        </StyledCartList>
      ) : null}
    </StyledCartIconWrapper>
  );
};
