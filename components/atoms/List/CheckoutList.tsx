import { memo } from "react";
import type { Sofa } from "../../../types";
import styled from "styled-components";
import Image from "next/image";

type CheckoutListProps = {
  cartItems: (Sofa & { quantity: number })[];
};

const StyledCheckoutListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column wrap;
  align-self: flex-start;
  padding: 4rem 0;
  @media all and (min-width: 1000px) {
    width: 50%;
  }
`;

const StyledCheckoutList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const StyledCheckoutListItem = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0 1rem;
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

const StyledItemName = styled.h3``;

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

const StyledItemTotalCost = styled.span``;

const StyledRemoveButton = styled.button`
  border: 0 none;
  background-color: transparent;
`;

export const CheckoutList = memo<CheckoutListProps>(({ cartItems }) => {
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
              <StyledItemName>{cartItem.name}</StyledItemName>
              <StyledInputLabel>
                <span className="sr-only">quantity</span>
                <StyledQuantityInput value={99} type="number" />
              </StyledInputLabel>
              <StyledItemTotalCost>
                ${cartItem.quantity * cartItem.cost}
              </StyledItemTotalCost>
              <StyledRemoveButton>
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
    </StyledCheckoutListWrapper>
  );
});
