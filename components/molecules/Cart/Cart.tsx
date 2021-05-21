import Image from "next/image";
import { useState } from "react";
import { useCart } from "context/CartContext";
import { CartList } from "components/molecules/List/CartList/CartList";
import {
  StyledCartWrapper,
  StyledCartButton,
  StyledCartProductsCount,
  StyledCartListWrapper,
} from "./Cart.styles";

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
