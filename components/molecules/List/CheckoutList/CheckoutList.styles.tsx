import styled from "styled-components";

export const StyledCheckoutListWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: column wrap;
  padding: 4rem 0;
  @media all and (min-width: 350px) {
    padding: 4rem 2rem;
  }
  @media all and (min-width: 1000px) {
    width: 50%;
    padding: 0 3rem;
  }
`;

export const StyledCheckoutList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  overflow-y: scroll;
  min-height: 50vh;
  max-height: 75vh;
  -ms-overflow-style: none;
  scrollbar-width: none;
  max-width: 60rem;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledCheckoutSummary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  padding-right: 3rem;
`;

export const StyledTotalCost = styled.span`
  font-weight: bold;
  margin-right: 2rem;
`;

export const StyledEmptyCheckoutList = styled.p`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
  min-height: 60vh;
`;
