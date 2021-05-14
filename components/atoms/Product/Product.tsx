import { memo } from "react";
import type { Sofa } from "../../../types";
import styled from "styled-components";
import Image from "next/image";

type ProductProps = {
  product: Sofa;
};

const StyledProduct = styled.article`
  width: 100%;
  position: relative;
`;

const StyledProductFlashcard = styled.h3`
  position: absolute;
  bottom: 12%;
  right: 0;
  background-color: var(--white-100);
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
`;

const StyledProductFlashcardCost = styled.span`
  font-weight: normal;
  font-size: 1.2rem;
  padding-right: 0.5rem;
`;

export const Product = memo<ProductProps>(({ product }) => {
  console.log(product);
  return (
    <StyledProduct>
      <Image
        src={product.imgurl}
        width="100%"
        height="100%"
        layout="responsive"
        alt={product.name}
      />

      <StyledProductFlashcard>
        <StyledProductFlashcardCost>${product.cost}</StyledProductFlashcardCost>
        {product.name}
      </StyledProductFlashcard>
    </StyledProduct>
  );
});
