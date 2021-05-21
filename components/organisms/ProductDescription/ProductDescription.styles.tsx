import styled from "styled-components";

export const StyledProductDescription = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column wrap;
  padding: 5rem 4rem;
  min-height: 90vh;

  @media all and (min-width: 1000px) {
    width: 50%;
  }
`;

export const StyledProductName = styled.h1`
  font-size: 4rem;
  position: relative;
  margin: 1.5rem 0;

  &::after {
    position: absolute;
    content: "";
    width: 80%;
    height: 80%;
    top: -15%;
    left: -15%;
    background-color: var(--yellow-500);
    z-index: -1;
  }

  @media all and (min-width: 1000px) {
    margin: 0;
  }
`;

export const StyledProductType = styled.p`
  align-self: flex-start;
  margin: 2rem 0;
  .bold {
    font-weight: bold;
  }
`;

export const StyledProductDescriptionText = styled.p`
  line-height: 2.2rem;
  align-self: flex-start;
  margin-bottom: 2rem;
  font-size: 1.4rem;
`;

export const StyledProductColorSelectTitle = styled.h2`
  align-self: flex-start;
  font-weight: normal;
  font-size: 2.2rem;
`;

export const StyledProductOperations = styled.div`
  align-self: flex-end;
  display: flex;
  align-items: center;
`;

export const StyledProductCost = styled.span`
  font-weight: bold;
  margin-right: 1.8rem;
  font-size: 1.8rem;
`;
