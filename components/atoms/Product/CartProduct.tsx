import { memo } from "react";
import styled from "styled-components";
import type { Sofa } from "../../../types";
import Image from "next/image";

type CartProductProps = {
  readonly product: Sofa & { quantity: number };
  readonly onRemoveItem: (product: Sofa & { quantity: number }) => void;
};

const StyledCartListItem = styled.li`
  display: grid;
  grid-template-columns: 5fr 1fr;
  margin: 1.5rem 0;
`;

const StyledItemDescription = styled.div``;

const StyledItemName = styled.h3`
  font-size: 1.3rem;
`;

const StyledItemCost = styled.span`
  font-size: 1.1rem;
`;

const StyledRemoveItemButton = styled.button`
  border: 0 none;
  background-color: transparent;
  cursor: pointer;
`;

export const CartProduct = memo<CartProductProps>(
  ({ product, onRemoveItem }) => {
    return (
      <StyledCartListItem key={product.id}>
        <StyledItemDescription>
          <StyledItemName>{product.name}</StyledItemName>
          <StyledItemCost>
            {product.quantity} x ${product.cost}
          </StyledItemCost>
        </StyledItemDescription>
        <StyledRemoveItemButton onClick={() => onRemoveItem(product)}>
          <Image src="/svg/close.svg" width="20" height="20" alt="close" />
        </StyledRemoveItemButton>
      </StyledCartListItem>
    );
  }
);
