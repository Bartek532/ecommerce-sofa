import Image from "next/image";
import styled from "styled-components";

const StyledCartIconWrapper = styled.div`
  position: relative;
  margin-right: 1.5rem;
`;

const StyledCartButton = styled.button`
  background-color: transparent;
  border: 0 none;
  cursor: pointer;
`;

const StyledCartCount = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-15%, -41%);
  font-size: 1.5rem;
  cursor: pointer;

  @media all and (min-width: 1000px) {
    font-size: 1.3rem;
  }
`;

export const Cart = () => {
  return (
    <StyledCartIconWrapper>
      <StyledCartButton>
        <Image src="/svg/cart3.svg" width="50" height="50" alt="cart" />
      </StyledCartButton>

      <StyledCartCount>1</StyledCartCount>
    </StyledCartIconWrapper>
  );
};
