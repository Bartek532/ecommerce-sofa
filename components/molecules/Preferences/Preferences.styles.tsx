import styled from "styled-components";

export const StyledPreferencesWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  margin-bottom: 2rem;

  & > * {
    flex: 0 1 30rem;
  }
`;
