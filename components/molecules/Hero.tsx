import Image from "next/image";
import styled from "styled-components";
import { HeroLink } from "../atoms/Link/HeroLink";
import { StyledButton } from "../atoms/Button/Button";
import { memo } from "react";
import { useRouter } from "next/router";
import { auth } from "../../firebase";

type HeroProps = {
  isHome?: boolean;
};

const StyledHeroWrapper = styled.section<HeroProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: ${props => (props.isHome ? "space-around" : "flex-end")};
  align-items: center;
  flex-direction: column;
  background-color: var(--yellow-500);
  padding: 4rem 4rem 12rem;
  position: relative;

  @media all and (min-width: 1000px) {
    width: 50%;
  }
`;

const StyledHeroHeading = styled.header`
  margin: 0 0 6rem 1rem;
  align-self: flex-start;
`;

const StyledHeroHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 1rem;
  padding: 0 3.5rem;
  align-items: center;
`;

const StyledBackBtn = styled.button`
  background: transparent;
  border: 0 none;
  cursor: pointer;
`;

export const Hero = memo<HeroProps>(({ isHome = true }) => {
  const router = useRouter();
  const handleGoBack = () => {
    router.back();
  };

  const handleLogout = () => {
    auth.signOut();
    return router.push("/login");
  };

  return (
    <StyledHeroWrapper isHome={isHome}>
      {isHome ? (
        <StyledHeroHeading>
          <HeroLink />
        </StyledHeroHeading>
      ) : (
        <StyledHeroHeader>
          <StyledBackBtn onClick={handleGoBack}>
            <Image src="/svg/back2.svg" width="40" height="40" />
          </StyledBackBtn>
          <StyledButton onClick={handleLogout}>logout</StyledButton>
        </StyledHeroHeader>
      )}
      <Image src="/svg/sofa.svg" width="450" height="450" />
    </StyledHeroWrapper>
  );
});
