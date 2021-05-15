import { ProductTile } from "../atoms/Product/ProductTile";
import type { Sofa } from "../../types";
import { memo } from "react";
import styled from "styled-components";

type ProductsListProps = {
  products: Sofa[];
};

const StyledProductsListWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 72rem;
  margin-bottom: 3rem;
`;
const StyledEmptyResults = styled.p`
  margin: 2rem 0;
  font-size: 1.8rem;
`;

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
