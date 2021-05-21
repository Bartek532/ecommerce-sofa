import type { Sofa } from "types";
import { Hero } from "components/organisms/Hero/Hero";
import { ProductDescription } from "components/organisms/ProductDescription/ProductDescription";
import { memo } from "react";
import { StyledProductViewWrapper } from "./ProductView.styles";

type ProductViewProps = {
  readonly product: Sofa;
};

export const ProductView = memo<ProductViewProps>(({ product }) => {
  return (
    <StyledProductViewWrapper>
      <Hero isHome={false} />
      <ProductDescription product={product} />
    </StyledProductViewWrapper>
  );
});
