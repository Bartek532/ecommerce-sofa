import { Header } from "../molecules/Header";
import { HomeBanner } from "../molecules/HomeBanner";
import styled from "styled-components";
import { memo, useEffect } from "react";
import type { Sofa } from "../../types";
import { ProductsList } from "../molecules/ProductsList";
import { Preferences } from "../molecules/Preferences";
import { useProduct } from "../../context/ProductContext";

const StyledMainWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

type MainProps = {
  results: Sofa[];
};

export const Main = memo<MainProps>(({ results }) => {
  const { setProducts, products, filteredProducts } = useProduct();

  useEffect(() => {
    setProducts(results);
  }, []);
  return (
    <StyledMainWrapper>
      <Header />
      <HomeBanner />
      <Preferences />
      <ProductsList
        products={filteredProducts.length ? filteredProducts : products}
      />
    </StyledMainWrapper>
  );
});
