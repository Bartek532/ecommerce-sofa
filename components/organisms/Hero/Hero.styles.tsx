import styled from "styled-components";

type HeroProps = {
  isHome?: boolean;
};

export const StyledHeroWrapper = styled.section<HeroProps>`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: ${props => (props.isHome ? "space-around" : "center")};
  align-items: center;
  flex-direction: column;
  background-color: var(--yellow-500);
  padding: 2.4rem 2.5rem 12rem;
  position: relative;
  padding-bottom: ${props => (props.isHome ? "12rem" : "4rem")};
  @media all and (min-width: 1000px) {
    width: 50%;
  }
`;

export const StyledHeroHeading = styled.header`
  margin: 0 0 6rem 1rem;
  align-self: flex-start;
`;

export const StyledHeroHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 1rem;
  padding: 0 3.5rem;
  align-items: center;
`;

export const StyledHeroBackBtn = styled.button`
  background: transparent;
  border: 0 none;
  cursor: pointer;
  padding: 0.5rem;
`;

export const StyledHeroImage = styled.div`
  width: 100%;
  max-width: 32rem;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export const StyledRightHeroPannel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
