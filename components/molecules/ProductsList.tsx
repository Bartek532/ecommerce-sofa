import { Product } from "../atoms/Product/Product";
import type { Sofa } from "../../types";
import { memo } from "react";
import styled from "styled-components";

type ProductsListProps = {
  products: Sofa[];
};

const StyledProductsListWrapper = styled.section`
  width: 100%;
  display: grid;
  grid-gap: 3rem;
  padding: 2.5rem;
  margin-bottom: 3rem;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  max-width: 72rem;

  @media all and (min-width: 1000px) {
    grid-gap: 5rem;
  }
`;

export const ProductsList = memo<ProductsListProps>(({ products }) => {
  return (
    <StyledProductsListWrapper>
      {products.map(product => {
        return <Product product={product} key={product.id} />;
      })}
    </StyledProductsListWrapper>
  );
});
