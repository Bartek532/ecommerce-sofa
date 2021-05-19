import { memo } from "react";
import styled from "styled-components";
import type { Sofa } from "../../../types";
import Image from "next/image";
import Link from "next/link";

type CheckoutProductProps = {
  product: Sofa & { quantity: number };
  onChangeItemQuantity: (
    product: Sofa & { quantity: number },
    quantity: number
  ) => void;
  onRemoveItem: (product: Sofa & { quantity: number }) => void;
};

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

export const CheckoutProduct = memo<CheckoutProductProps>(
  ({ product, onChangeItemQuantity, onRemoveItem }) => {
    return (
      <StyledCheckoutListItem key={product.id}>
        <StyledItemImage>
          <Image
            src={product.imgurl}
            alt={product.name}
            width="100"
            height="100"
          />
        </StyledItemImage>
        <Link href={`/products/${product.id}`}>
          <StyledNameLink>
            <h3>{product.name}</h3>
          </StyledNameLink>
        </Link>
        <StyledInputLabel>
          <span className="sr-only">quantity</span>
          <StyledQuantityInput
            value={product.quantity}
            type="number"
            onChange={e =>
              onChangeItemQuantity(product, Number(e.target.value))
            }
            max="99"
          />
        </StyledInputLabel>
        <span>${product.quantity * product.cost}</span>
        <StyledRemoveButton onClick={() => onRemoveItem(product)}>
          <Image src="/svg/close.svg" width="20" height="20" alt="close" />
        </StyledRemoveButton>
      </StyledCheckoutListItem>
    );
  }
);
