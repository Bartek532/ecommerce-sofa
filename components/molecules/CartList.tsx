import type { Sofa } from "../../types";
import { memo } from "react";
import styled from "styled-components";
import Image from "next/image";
import { StyledButton } from "../atoms/Button/Button";
import Link from "next/link";
import { useCart } from "../../context/CartContext";

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

const StyledListElement = styled.li`
  display: grid;
  grid-template-columns: 5fr 1fr;
  margin: 1.5rem 0;
`;

const StyledElementDescription = styled.div``;

const StyledProductName = styled.h3`
  font-size: 1.3rem;
`;

const StyledProductCost = styled.span`
  font-size: 1.1rem;
`;

const StyledCloseButton = styled.button`
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
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
              <StyledListElement key={cartItem.id}>
                <StyledElementDescription>
                  <StyledProductName>{cartItem.name}</StyledProductName>
                  <StyledProductCost>
                    {cartItem.quantity} x ${cartItem.cost}
                  </StyledProductCost>
                </StyledElementDescription>
                <StyledCloseButton
                  onClick={() => handleRemoveFromCart(cartItem)}
                >
                  <Image
                    src="/svg/close.svg"
                    width="20"
                    height="20"
                    alt="close"
                  />
                </StyledCloseButton>
              </StyledListElement>
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