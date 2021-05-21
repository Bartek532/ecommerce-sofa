import styled from "styled-components";

export const StyledFormWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-flow: column wrap;
  padding: 5rem 1rem;
  min-height: 80vh;

  @media all and (min-width: 1000px) {
    width: 50%;
  }
`;

export const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

export const StyledLabel = styled.label`
  margin: 1.2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  max-width: 30rem;
`;

export const StyledFormHeading = styled.h2`
  text-transform: uppercase;
  font-size: 3.9rem;
  margin-bottom: 3rem;
`;

export const StyledFormSignature = styled.span`
  font-size: 1.4rem;
  margin-top: 1rem;
`;
