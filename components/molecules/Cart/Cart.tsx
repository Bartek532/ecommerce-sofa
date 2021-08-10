import Image from "next/image";
import { useState } from "react";
import { useCart } from "context/CartContext";
import { useWindowSize } from "lib/utils/hooks";
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
  const { width } = useWindowSize();
  return (
    <StyledCartWrapper>
      <StyledCartButton
        onClick={() => setIsCartOpen(open => !open)}
        id="cart-btn"
      >
        <Image
          src="/svg/cart.svg"
          width={width && width > 1100 ? "45" : "40"}
          height={width && width > 1100 ? "45" : "40"}
          alt="cart"
        />
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
