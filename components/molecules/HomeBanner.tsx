import Image from "next/image";
import styled from "styled-components";

const StyledHomeSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  place-items: center;
  padding: 2rem 5rem;
  min-height: 95vh;
  margin: 0 auto;

  @media all and (min-width: 1000px) {
    min-height: 75vh;
    max-width: 90rem;
  }
`;

const StyledHomeTitle = styled.h2`
  font-size: 3.7rem;
  line-height: 4.8rem;
  position: relative;

  &::before {
    position: absolute;
    width: 50%;
    height: 80%;
    content: "";
    background-color: var(--yellow-500);
    z-index: -1;
    top: -15%;
    left: -7%;
  }
`;

export const HomeBanner = () => {
  return (
    <StyledHomeSection>
      <StyledHomeTitle>Welcome to the world of convenience!</StyledHomeTitle>
      <Image src="/svg/sofa.svg" width="500" height="500" />
    </StyledHomeSection>
  );
};
