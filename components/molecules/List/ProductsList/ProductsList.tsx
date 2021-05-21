import { ProductTile } from "components/atoms/Product/ProductTile/ProductTile";
import type { Sofa } from "types";
import { memo } from "react";
import {
  StyledProductsListWrapper,
  StyledEmptyResults,
} from "./ProductsList.styles";

type ProductsListProps = {
  readonly products: Sofa[];
};

export const ProductsList = memo<ProductsListProps>(({ products }) => {
  return (
    <StyledProductsListWrapper>
      {products.length ? (
        products.map(product => {
          return <ProductTile product={product} key={product.id} />;
        })
      ) : (
        <StyledEmptyResults>
          No products matches your search &#128530;
        </StyledEmptyResults>
      )}
    </StyledProductsListWrapper>
  );
});

ProductsList.displayName = "ProductsList";
