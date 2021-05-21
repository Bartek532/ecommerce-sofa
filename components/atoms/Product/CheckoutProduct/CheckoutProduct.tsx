import { memo } from "react";
import type { Sofa } from "types";
import Image from "next/image";
import Link from "next/link";
import {
  StyledCheckoutListItem,
  StyledItemImage,
  StyledItemName,
  StyledItemQuantityInputLabel,
  StyledItemQuantityInput,
  StyledRemoveItemButton,
} from "./CheckoutProduct.styles";

type CheckoutProductProps = {
  readonly product: Sofa & { quantity: number };
  readonly onChangeItemQuantity: (
    product: Sofa & { quantity: number },
    quantity: number
  ) => void;
  readonly onRemoveItem: (product: Sofa & { quantity: number }) => void;
};

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
          <StyledItemName>
            <h3>{product.name}</h3>
          </StyledItemName>
        </Link>
        <StyledItemQuantityInputLabel>
          <span className="sr-only">quantity</span>
          <StyledItemQuantityInput
            value={product.quantity}
            type="number"
            onChange={e =>
              onChangeItemQuantity(product, Number(e.target.value))
            }
            max="99"
          />
        </StyledItemQuantityInputLabel>
        <span>${product.quantity * product.cost}</span>
        <StyledRemoveItemButton onClick={() => onRemoveItem(product)}>
          <Image src="/svg/close.svg" width="20" height="20" alt="close" />
        </StyledRemoveItemButton>
      </StyledCheckoutListItem>
    );
  }
);

CheckoutProduct.displayName = "CheckoutProduct";
