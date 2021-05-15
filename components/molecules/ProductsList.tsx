import { Product } from "../atoms/Product/Product";
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

export const ProductsList = memo<ProductsListProps>(({ products }) => {
  return (
    <StyledProductsListWrapper>
      {products.map(product => {
        return <Product product={product} key={product.id} />;
      })}
    </StyledProductsListWrapper>
  );
});
