import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: grid;
  place-items: center;
`;

export const StyledModalWindow = styled.div`
  width: 90%;
  max-width: 40rem;
  background-color: var(--white-100);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding-top: 3rem;
  border-radius: 0.6rem;
`;

export const StyledModalHeading = styled.h2`
  font-weight: 700;
  margin: 2rem 0 1.5rem 0;
  font-size: 3rem;
`;

export const StyledModalDescription = styled.div`
  text-align: center;
  font-size: 1.4rem;
  margin: 0.6rem 0;
  line-height: 2rem;
  padding: 0 3.5rem;
`;

export const StyledModalBtn = styled.button`
  width: 100%;
  border: 0 none;
  background-color: ${props =>
    props.color === "error" ? "var(--red-100)" : "var(--green-100)"};
  color: var(--white-100);
  padding: 1.5rem 0;
  font-size: 1.3rem;
  font-family: inherit;
  text-transform: uppercase;
  margin-top: 1.7rem;
  font-weight: 500;
  letter-spacing: 1.2px;
  border-radius: 0 0 0.6rem 0.6rem;
  cursor: pointer;
`;
