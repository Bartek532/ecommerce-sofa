import React, { memo } from "react";
import type { Sofa } from "types";
import { useCart } from "context/CartContext";
import { StripeButton } from "components/atoms/Button/StripeButton";
import { CheckoutProduct } from "components/atoms/Product/CheckoutProduct/CheckoutProduct";
import {
  StyledCheckoutListWrapper,
  StyledCheckoutList,
  StyledEmptyCheckoutList,
  StyledCheckoutSummary,
  StyledTotalCost,
} from "./CheckoutList.styles";

type CheckoutListProps = {
  readonly cartItems: (Sofa & { quantity: number })[];
};

export const CheckoutList = memo<CheckoutListProps>(({ cartItems }) => {
  const { getTotalCost, handleRemoveFromCart, handleChangeProductQuantity } =
    useCart();

  return (
    <StyledCheckoutListWrapper>
      {cartItems.length ? (
        <StyledCheckoutList>
          {cartItems.map(cartItem => {
            return (
              <CheckoutProduct
                product={cartItem}
                onRemoveItem={handleRemoveFromCart}
                onChangeItemQuantity={handleChangeProductQuantity}
              />
            );
          })}
        </StyledCheckoutList>
      ) : (
        <StyledEmptyCheckoutList>
          Cart is empty &#128531;
        </StyledEmptyCheckoutList>
      )}
      <StyledCheckoutSummary>
        <StyledTotalCost>${getTotalCost()}</StyledTotalCost>
        <StripeButton price={getTotalCost()} />
      </StyledCheckoutSummary>
    </StyledCheckoutListWrapper>
  );
});
