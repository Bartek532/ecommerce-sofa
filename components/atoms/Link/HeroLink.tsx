import styled from "styled-components";
import Link from "next/link";

const StyledHeroLink = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.8rem;
`;

export const HeroLink = () => {
  return (
    <Link href="/">
      <StyledHeroLink>furniture? sofa!</StyledHeroLink>
    </Link>
  );
};
