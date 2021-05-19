import React, { memo } from "react";
import type { Sofa } from "../../../types";
import styled from "styled-components";
import Image from "next/image";
import { useCart } from "../../../context/CartContext";
import Link from "next/link";
import { StyledButton } from "../Button/Button";

type CheckoutListProps = {
  cartItems: (Sofa & { quantity: number })[];
};

const StyledCheckoutListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column wrap;
  padding: 4rem 0;
  @media all and (min-width: 350px) {
    padding: 4rem 2rem;
  }
  @media all and (min-width: 1000px) {
    width: 50%;
    padding: 0 3rem;
  }
`;

const StyledCheckoutList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  overflow-y: scroll;
  min-height: 50vh;
  max-height: 75vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width: 60rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const StyledCheckoutListItem = styled.li`
  width: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 2fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 1rem;

  @media all and (min-width: 700px) {
    grid-template-columns: 1fr 3fr 1fr 2fr 1fr;
  }

  @media all and (min-width: 1000px) {
    grid-template-columns: 3fr 1fr 2fr 1fr;
  }

  @media all and (min-width: 1250px) {
    grid-template-columns: 1fr 3fr 1fr 2fr 1fr;
  }
`;

const StyledItemImage = styled.div`
  display: none;

  @media all and (min-width: 700px) {
    display: block;
  }

  @media all and (min-width: 1000px) {
    display: none;
  }

  @media all and (min-width: 1250px) {
    display: block;
  }
`;

const StyledNameLink = styled.a`
  justify-self: start;
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  @media all and (min-width: 700px) {
    justify-self: center;
  }
`;

const StyledInputLabel = styled.label`
  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

const StyledQuantityInput = styled.input`
  padding: 0.7rem;
  font-family: inherit;
  font-size: 1.8rem;
  text-align: center;
  width: 4.5rem;

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const StyledRemoveButton = styled.button`
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
`;

const StyledCheckoutSummary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding-right: 3rem;
`;

const StyledTotalCost = styled.span`
  font-weight: bold;
  margin-right: 2rem;
`;

export const CheckoutList = memo<CheckoutListProps>(({ cartItems }) => {
  const { handleChangeProductQuantity, handleRemoveFromCart, getTotalCost } =
    useCart();

  return (
    <StyledCheckoutListWrapper>
      <StyledCheckoutList>
        {cartItems.map(cartItem => {
          return (
            <StyledCheckoutListItem key={cartItem.id}>
              <StyledItemImage>
                <Image
                  src={cartItem.imgurl}
                  alt={cartItem.name}
                  width="100"
                  height="100"
                />
              </StyledItemImage>
              <Link href={`/products/${cartItem.id}`}>
                <StyledNameLink>
                  <h3>{cartItem.name}</h3>
                </StyledNameLink>
              </Link>
              <StyledInputLabel>
                <span className="sr-only">quantity</span>
                <StyledQuantityInput
                  value={cartItem.quantity}
                  type="number"
                  onChange={e =>
                    handleChangeProductQuantity(
                      cartItem,
                      Number(e.target.value)
                    )
                  }
                  max="99"
                />
              </StyledInputLabel>
              <span>${cartItem.quantity * cartItem.cost}</span>
              <StyledRemoveButton
                onClick={() => handleRemoveFromCart(cartItem)}
              >
                <Image
                  src="/svg/close.svg"
                  width="20"
                  height="20"
                  alt="close"
                />
              </StyledRemoveButton>
            </StyledCheckoutListItem>
          );
        })}
      </StyledCheckoutList>
      <StyledCheckoutSummary>
        <StyledTotalCost>${getTotalCost()}</StyledTotalCost>
        <StyledButton>Pay now</StyledButton>
      </StyledCheckoutSummary>
    </StyledCheckoutListWrapper>
  );
});
