import type { Sofa } from "types";
import { memo } from "react";
import { StyledButton } from "components/atoms/Button/Button.styles";
import Link from "next/link";
import { useCart } from "context/CartContext";
import { CartProduct } from "components/atoms/Product/CartProduct/CartProduct";
import {
  StyledCartListWrapper,
  StyledCartList,
  StyledEmptyCart,
} from "./CartList.styles";

type CartListProps = {
  readonly cartItems: (Sofa & {
    quantity: number;
  })[];
};

export const CartList = memo<CartListProps>(({ cartItems }) => {
  const { handleRemoveFromCart } = useCart();
  return (
    <StyledCartListWrapper>
      <StyledCartList>
        {cartItems.length ? (
          cartItems.map(cartItem => {
            return (
              <CartProduct
                onRemoveItem={handleRemoveFromCart}
                product={cartItem}
                key={cartItem.id}
              />
            );
          })
        ) : (
          <StyledEmptyCart>Cart is empty &#128531;</StyledEmptyCart>
        )}
      </StyledCartList>
      <Link href="/checkout">
        <StyledButton>Checkout</StyledButton>
      </Link>
    </StyledCartListWrapper>
  );
});

CartList.displayName = "CartList";
