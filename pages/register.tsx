import { Hero } from "../components/molecules/Hero";
import { RegisterForm } from "../components/organisms/RegisterForm";
import styled from "styled-components";
import { Layout } from "../components/organisms/Layout";

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
    <Layout title="Register">
      <MainWrapper>
        <Hero />
        <RegisterForm />
      </MainWrapper>
    </Layout>
  );
};

export default Register;
