import Image from "next/image";
import styled from "styled-components";
import Link from "next/link";

const HeroWrapper = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column wrap;
  background-color: var(--yellow-600);
  padding: 4rem 4rem 12rem;
`;

const LinkText = styled.h1`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 1.8rem;
  align-self: flex-start;
  margin: 0 0 6rem 1rem;
`;

export const Hero = () => {
  return (
    <HeroWrapper>
      <Link href="/">
        <LinkText>furniture? sofa!</LinkText>
      </Link>
      <Image src="/svg/sofa.svg" width="400" height="400" />
    </HeroWrapper>
  );
};
