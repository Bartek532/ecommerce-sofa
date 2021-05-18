import Image from "next/image";
import styled from "styled-components";

const StyledHomeSection = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  place-items: center;
  padding: 2rem 3rem;
  min-height: 80vh;
  margin: 0 auto;
  margin-top: 5rem;

  @media all and (min-width: 1000px) {
    min-height: 65vh;
    margin-top: 0;
    max-width: 90rem;
    margin-bottom: 2rem;
  }

  @media all and (min-width: 360px) {
    padding: 2rem 5rem;
  }
`;

const StyledHomeTitle = styled.h2`
  font-size: 3.7rem;
  line-height: 4.8rem;
  position: relative;
  max-width: 40rem;

  &::before {
    position: absolute;
    width: 60%;
    height: 80%;
    content: "";
    background-color: var(--yellow-500);
    z-index: -1;
    top: -15%;
    left: -10%;
  }
`;

export const HomeBanner = () => {
  return (
    <StyledHomeSection>
      <StyledHomeTitle>Welcome to the world of convenience!</StyledHomeTitle>
      <Image src="/svg/sofa.svg" width="450" height="450" />
    </StyledHomeSection>
  );
};
