import { Header } from "components/molecules/Header/Header";
import { HomeBanner } from "components/molecules/HomeBanner/HomeBanner";
import { memo, useEffect } from "react";
import type { Sofa } from "types";
import { ProductsList } from "components/molecules/List/ProductsList/ProductsList";
import { Preferences } from "components/molecules/Preferences/Preferences";
import { useProduct } from "context/ProductContext";
import { StyledMainWrapper, StyledMainContent } from "./Main.styles";

type MainProps = {
  readonly results: Sofa[];
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

Main.displayName = "Main";
