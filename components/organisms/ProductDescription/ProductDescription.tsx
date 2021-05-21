import React, { memo } from "react";
import type { Sofa } from "types";
import { ColorSelect } from "components/molecules/ColorSelect/ColorSelect";
import { StyledButton } from "components/atoms/Button/Button.styles";
import { useProduct } from "context/ProductContext";
import { useCart } from "context/CartContext";
import { useMainContext } from "context/MainContext";
import { sofaColors } from "lib/utils/consts";
import {
  StyledProductDescription,
  StyledProductName,
  StyledProductType,
  StyledProductDescriptionText,
  StyledProductColorSelectTitle,
  StyledProductOperations,
  StyledProductCost,
} from "./ProductDescription.styles";

type ProductDescriptionProps = {
  readonly product: Sofa;
};

export const ProductDescription = memo<ProductDescriptionProps>(
  ({ product }) => {
    const { setActiveSofaColor } = useProduct();
    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      window.scrollTo(0, 0);
      setActiveSofaColor(e.target.value as typeof sofaColors[number]["label"]);
    };

    const { handleAddToCart } = useCart();
    const { setModal } = useMainContext();

    const handleAddProductToCart = () => {
      handleAddToCart(product);
      setModal({
        isOpen: true,
        type: "success",
        message: "Successfully added to cart!",
      });
    };

    return (
      <StyledProductDescription>
        <StyledProductName>{product.name}</StyledProductName>
        <StyledProductType>
          type: <span className="bold">{product.sofaType}</span>
        </StyledProductType>
        <StyledProductDescriptionText>
          {product.description}
        </StyledProductDescriptionText>
        <StyledProductColorSelectTitle>
          Color preview
        </StyledProductColorSelectTitle>
        <ColorSelect onChange={handleColorChange} />

        <StyledProductOperations>
          <StyledProductCost>${product.cost}</StyledProductCost>
          <StyledButton onClick={handleAddProductToCart}>
            Add to cart
          </StyledButton>
        </StyledProductOperations>
      </StyledProductDescription>
    );
  }
);
