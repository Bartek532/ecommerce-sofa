import React, { memo } from "react";
import type { Sofa } from "../../../types";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

type ProductProps = {
  product: Sofa;
};

const StyledProductTile = styled.a`
  width: 100%;
  position: relative;
  flex: 0 1 30rem;
  margin: 2rem;
  cursor: pointer;
`;

const StyledProductTileFlashcard = styled.h3`
  position: absolute;
  bottom: 12%;
  right: 0;
  background-color: var(--white-100);
  padding: 1rem 1.5rem;
  font-size: 1.6rem;
`;

const StyledProductTileFlashcardCost = styled.span`
  font-weight: normal;
  font-size: 1.2rem;
  padding-right: 0.5rem;
`;

export const ProductTile = memo<ProductProps>(({ product }) => {
  return (
    <Link href={`/products/${product.id}`} passHref>
      <StyledProductTile>
        <Image
          src={product.imgurl}
          width="100%"
          height="100%"
          layout="responsive"
          alt={product.name}
        />
        <StyledProductTileFlashcard>
          <StyledProductTileFlashcardCost>
            ${product.cost}
          </StyledProductTileFlashcardCost>
          {product.name}
        </StyledProductTileFlashcard>
      </StyledProductTile>
    </Link>
  );
});
