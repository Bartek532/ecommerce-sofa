import Image from "next/image";
import { HeroLink } from "components/atoms/Link/HeroLink/HeroLink";
import { StyledButton } from "components/atoms/Button/Button.styles";
import { Cart } from "components/molecules/Cart/Cart";
import { memo, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "lib/firebase";
import { useProduct } from "context/ProductContext";
import { sofaColors } from "lib/utils/consts";
import {
  StyledHeroWrapper,
  StyledHeroHeading,
  StyledHeroHeader,
  StyledHeroBackBtn,
  StyledRightHeroPannel,
  StyledHeroImage,
} from "./Hero.styles";

type HeroProps = {
  isHome?: boolean;
};

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

  const [selectedPalette, setSelectedPalette] = useState(sofaColors[0].palette);

  useEffect(() => {
    setSelectedPalette(
      sofaColors.find(color => color.label === activeSofaColor)!.palette
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
          <StyledHeroBackBtn onClick={handleGoBack}>
            <Image
              src="/svg/back.svg"
              width="40"
              height="40"
              alt="arrow-left"
            />
          </StyledHeroBackBtn>
          <StyledRightHeroPannel>
            <Cart />
            <StyledButton onClick={handleLogout}>logout</StyledButton>
          </StyledRightHeroPannel>
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
            fill={"#" + selectedPalette.backrest}
          />
          <path
            d="m424.47389 336a32 32 0 0 0 30.54336-22.4552l31.726-101.52319a27.6089 27.6089 0 0 0 1.25675-8.23501v-.1778a27.6088 27.6088 0 0 0 -27.6088-27.6088 27.6088 27.6088 0 0 0 -26.38791 19.48944l-26.00329 84.51056h-304l-26.00325-84.51056a27.6088 27.6088 0 0 0 -26.38791-19.48944 27.6088 27.6088 0 0 0 -27.60884 27.6088v.1778a27.6089 27.6089 0 0 0 1.25675 8.235l31.726 101.52319a32 32 0 0 0 30.54336 22.45521z"
            fill={"#" + selectedPalette.main}
          />
          <path
            d="m128 240h104a24 24 0 0 1 24 24v16a0 0 0 0 1 0 0h-152a0 0 0 0 1 0 0v-16a24 24 0 0 1 24-24z"
            fill={"#" + selectedPalette.leftPillow}
          />
          <path
            d="m280 240h104a24 24 0 0 1 24 24v16a0 0 0 0 1 0 0h-152a0 0 0 0 1 0 0v-16a24 24 0 0 1 24-24z"
            fill={"#" + selectedPalette.rightPillow}
          />
          <g fill={"#" + selectedPalette.dots}>
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

Hero.displayName = "Hero";
