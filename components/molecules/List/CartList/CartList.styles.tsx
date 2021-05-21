import styled from "styled-components";

export const StyledCartListWrapper = styled.div`
  background-color: var(--white-100);
  border: 2.5px solid var(--black-100);
  display: grid;
  place-items: center;
  width: 20rem;
  min-height: 15rem;
  height: 27rem;
`;

export const StyledCartList = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  overflow-y: scroll;
  height: 20rem;
  padding: 1rem 2rem 0;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const StyledEmptyCart = styled.p`
  width: 100%;
  text-align: center;
  padding: 2rem 0;
`;
