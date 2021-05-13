import Image from "next/image";
import styled from "styled-components";
import { HeroLink } from "../atoms/Link/HeroLink";

const StyledHeroWrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column wrap;
  background-color: var(--yellow-600);
  padding: 4rem 4rem 12rem;

  @media all and (min-width: 1000px) {
    width: 50%;
  }
`;

const StyledHeroHeading = styled.header`
  margin: 0 0 6rem 1rem;
  align-self: flex-start;
`;

export const Hero = () => {
  return (
    <StyledHeroWrapper>
      <StyledHeroHeading>
        <HeroLink />
      </StyledHeroHeading>
      <Image src="/svg/sofa.svg" width="400" height="400" />
    </StyledHeroWrapper>
  );
};
