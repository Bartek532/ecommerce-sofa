import Image from "next/image";
import styled from "styled-components";
import { HeroLink } from "../atoms/Link/HeroLink";
import { StyledButton } from "../atoms/Button/Button";
import { memo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../../firebase";
import { useProduct } from "../../context/ProductContext";
import { sofaColors } from "../../lib/utils/consts";

type HeroProps = {
  isHome?: boolean;
};

const StyledHeroWrapper = styled.section<HeroProps>`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: ${props => (props.isHome ? "space-around" : "center")};
  align-items: center;
  flex-direction: column;
  background-color: var(--yellow-500);
  padding: 4rem 2.5rem 12rem;
  position: relative;
  padding-bottom: ${props => (props.isHome ? "12rem" : "4rem")};
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

const StyledHeroImage = styled.div`
  width: 100%;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Hero = memo<HeroProps>(({ isHome = true }) => {
  const router = useRouter();
  const { activeSofaColor } = useProduct();
  const handleGoBack = () => {
    router.back();
  };

  const handleLogout = () => {
    auth.signOut();
    return router.push("/login");
  };

  const [selectedPalette, setSelectedPalette] = useState(sofaColors[0]);

  useEffect(() => {
    setSelectedPalette(
      sofaColors.find(color => color.label === activeSofaColor)!
    );
  }, [activeSofaColor]);

  return (
    <StyledHeroWrapper isHome={isHome}>
      {isHome ? (
        <StyledHeroHeading>
          <HeroLink />
        </StyledHeroHeading>
      ) : (
        <StyledHeroHeader>
          <StyledBackBtn onClick={handleGoBack}>
            <Image src="/svg/back.svg" width="40" height="40" />
          </StyledBackBtn>
          <StyledButton onClick={handleLogout}>logout</StyledButton>
        </StyledHeroHeader>
      )}
      <StyledHeroImage>
        <svg
          id="flat"
          height="450"
          viewBox="0 0 512 512"
          width="450"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m80 288v-128a32 32 0 0 1 32-32h288a32 32 0 0 1 32 32v128z"
            fill={"#" + selectedPalette.color4}
          />
          <path
            d="m424.47389 336a32 32 0 0 0 30.54336-22.4552l31.726-101.52319a27.6089 27.6089 0 0 0 1.25675-8.23501v-.1778a27.6088 27.6088 0 0 0 -27.6088-27.6088 27.6088 27.6088 0 0 0 -26.38791 19.48944l-26.00329 84.51056h-304l-26.00325-84.51056a27.6088 27.6088 0 0 0 -26.38791-19.48944 27.6088 27.6088 0 0 0 -27.60884 27.6088v.1778a27.6089 27.6089 0 0 0 1.25675 8.235l31.726 101.52319a32 32 0 0 0 30.54336 22.45521z"
            fill={"#" + selectedPalette.color1}
          />
          <path
            d="m128 240h104a24 24 0 0 1 24 24v16a0 0 0 0 1 0 0h-152a0 0 0 0 1 0 0v-16a24 24 0 0 1 24-24z"
            fill={"#" + selectedPalette.color3}
          />
          <path
            d="m280 240h104a24 24 0 0 1 24 24v16a0 0 0 0 1 0 0h-152a0 0 0 0 1 0 0v-16a24 24 0 0 1 24-24z"
            fill={"#" + selectedPalette.color2}
          />
          <g fill={"#" + selectedPalette.color5}>
            <path d="m136 176h16v16h-16z" />
            <path d="m192 176h16v16h-16z" />
            <path d="m248 176h16v16h-16z" />
            <path d="m304 176h16v16h-16z" />
            <path d="m360 176h16v16h-16z" />
          </g>
          <path d="m96 336-8 48h16l32-48z" fill="#b1712c" />
          <path d="m416 336 8 48h-16l-32-48z" fill="#b1712c" />
        </svg>
      </StyledHeroImage>
    </StyledHeroWrapper>
  );
});
