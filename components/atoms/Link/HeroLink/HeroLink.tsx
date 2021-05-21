import Link from "next/link";
import { StyledHeroLink, StyledHeroLinkQuestion } from "./HeroLink.styles";
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
