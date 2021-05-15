import styled from "styled-components";
import Link from "next/link";

const StyledHeroLink = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 3rem;
`;

const StyledHeroLinkQuestion = styled.span`
  display: block;
  font-size: 1.6rem;
`;

export const HeroLink = () => {
  return (
    <Link href="/">
      <StyledHeroLink>
        <StyledHeroLinkQuestion>furniture?</StyledHeroLinkQuestion>
        sofa!
      </StyledHeroLink>
    </Link>
  );
};
