import { Header } from "../molecules/Header";
import { HomeBanner } from "../molecules/HomeBanner";
import styled from "styled-components";

const StyledMainWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
`;

export const Main = () => {
  return (
    <StyledMainWrapper>
      <Header />
      <HomeBanner />
    </StyledMainWrapper>
  );
};
