import styled from "styled-components";

export const StyledLink = styled.a`
  font-weight: 600;
  position: relative;
  font-size: inherit;
  padding: 0.2rem;
  cursor: pointer;
  transition: color 0.3s;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleY(0.13);
    background-color: var(--yellow-600);
    z-index: -1;
    transform-origin: 50% 100%;
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: scaleY(1);
  }
`;
