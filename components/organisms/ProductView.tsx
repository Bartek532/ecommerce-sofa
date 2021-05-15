import type { Sofa } from "../../types";
import { Hero } from "../molecules/Hero";
import { ProductDescription } from "./ProductDescription";
import { memo } from "react";
import styled from "styled-components";

type ProductViewProps = {
  product: Sofa;
};

const StyledProductViewWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  @media all and (min-width: 1000px) {
    flex-flow: row nowrap;
  }
`;

export const ProductView = memo<ProductViewProps>(({ product }) => {
  return (
    <StyledProductViewWrapper>
      <Hero isHome={false} />
      <ProductDescription product={product} />
    </StyledProductViewWrapper>
  );
});
