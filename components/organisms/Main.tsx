import { Header } from "../molecules/Header";
import { HomeBanner } from "../molecules/HomeBanner";
import styled from "styled-components";
import { memo } from "react";
import type { Sofa } from "../../types";
import { ProductsList } from "../molecules/ProductsList";
import { Preferences } from "../molecules/Preferences";

const StyledMainWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

type MainProps = {
  products: Sofa[];
};

export const Main = memo<MainProps>(({ products }) => {
  return (
    <StyledMainWrapper>
      <Header />
      <HomeBanner />
      <Preferences />
      <ProductsList products={products} />
    </StyledMainWrapper>
  );
});
