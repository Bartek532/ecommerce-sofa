import type { Sofa } from "../../../types";
import { memo } from "react";
import styled from "styled-components";
import { StyledButton } from "../../atoms/Button/Button";
import Link from "next/link";
import { useCart } from "../../../context/CartContext";
import { CartProduct } from "../../atoms/Product/CartProduct";

type CartListProps = {
  cartItems: (Sofa & {
    quantity: number;
  })[];
};

const StyledCartListWrapper = styled.div`
  background-color: var(--white-100);
  border: 2.5px solid var(--black-100);
  display: grid;
  place-items: center;
  width: 20rem;
  min-height: 15rem;
  height: 27rem;
`;

const StyledProductsList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  overflow-y: scroll;
  height: 20rem;
  padding: 1rem 2rem 0;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledEmptyCart = styled.p`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
`;

export const CartList = memo<CartListProps>(({ cartItems }) => {
  const { handleRemoveFromCart } = useCart();
  return (
    <StyledCartListWrapper>
      <StyledProductsList>
        {cartItems.length ? (
          cartItems.map(cartItem => {
            return (
              <CartProduct
                onRemoveItem={handleRemoveFromCart}
                product={cartItem}
              />
            );
          })
        ) : (
          <StyledEmptyCart>Cart is empty &#128531;</StyledEmptyCart>
        )}
      </StyledProductsList>
      <Link href="/checkout">
        <StyledButton>Checkout</StyledButton>
      </Link>
    </StyledCartListWrapper>
  );
});
