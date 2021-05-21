import React, { memo } from "react";
import type { Sofa } from "types";
import Image from "next/image";
import Link from "next/link";
import {
  StyledProductTile,
  StyledProductTileFlashcard,
  StyledProductTileFlashcardCost,
} from "./ProductTile.styles";

type ProductProps = {
  readonly product: Sofa;
};

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
