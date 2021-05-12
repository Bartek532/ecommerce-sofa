import { Hero } from "../components/organisms/Hero";
import { RegisterForm } from "../components/organisms/RegisterForm";
import styled from "styled-components";

const MainWrapper = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  @media all and (min-width: 1000px) {
    flex-flow: row nowrap;
  }
`;

const Register = () => {
  return (
    <MainWrapper>
      <Hero />
      <RegisterForm />
    </MainWrapper>
  );
};

export default Register;
