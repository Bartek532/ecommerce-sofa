import { Header } from "../molecules/Header";
import { HomeBanner } from "../molecules/HomeBanner";
import styled from "styled-components";
import { memo, useEffect } from "react";
import type { Sofa } from "../../types";
import { ProductsList } from "../molecules/ProductsList";
import { Preferences } from "../molecules/Preferences";
import { useProduct } from "../../context/ProductContext";

const StyledMainWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

const StyledMainContent = styled.main`
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
  const { setProducts, setFilteredProducts, filteredProducts } = useProduct();

  useEffect(() => {
    setProducts(results);
    setFilteredProducts(results);
  }, []);
  return (
    <StyledMainWrapper>
      <Header />
      <StyledMainContent>
        <HomeBanner />
        <Preferences />
        <ProductsList products={filteredProducts} />
      </StyledMainContent>
    </StyledMainWrapper>
  );
});
