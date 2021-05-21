import Image from "next/image";
import { StyledHomeSection, StyledHomeSectionTitle } from "./HomeBanner.styles";

export const HomeBanner = () => {
  return (
    <StyledHomeSection>
      <StyledHomeSectionTitle>
        Welcome to the world of convenience!
      </StyledHomeSectionTitle>
      <Image src="/svg/sofa.svg" width="450" height="450" alt="sofa" />
    </StyledHomeSection>
  );
};
