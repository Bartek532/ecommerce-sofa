import { memo } from "react";
import type { Sofa } from "types";
import Image from "next/image";
import {
  StyledCartListItem,
  StyledItemDescription,
  StyledItemName,
  StyledItemCost,
  StyledRemoveItemButton,
} from "./CartProduct.styles";

type CartProductProps = {
  readonly product: Sofa & { quantity: number };
  readonly onRemoveItem: (product: Sofa & { quantity: number }) => void;
};

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

CartProduct.displayName = "CartProduct";
