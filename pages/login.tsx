import { Hero } from "components/organisms/Hero/Hero";
import { LoginForm } from "components/organisms/Form/LoginForm";
import styled from "styled-components";
import { Layout } from "components/organisms/Layout";

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

const Login = () => {
  return (
    <Layout title="Login">
      <MainWrapper>
        <Hero />
        <LoginForm />
      </MainWrapper>
    </Layout>
  );
};

export default Login;
