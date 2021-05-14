import styled from "styled-components";
import { StyledInput } from "../atoms/Input/Input";
import { StyledButton } from "../atoms/Button/Button";
import { StyledInputError } from "../atoms/Input/InputError";
import { useForm } from "react-hook-form";
import { inputValidation } from "../../lib/utils/consts";
import { LoginData } from "../../types";
import Link from "next/link";
import { StyledLink } from "../atoms/Link/Link";
import { auth } from "../../firebase";
import { useMainContext } from "../../context/MainContext";

import { useRouter } from "next/router";

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

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const { setLoading, setModal } = useMainContext();

  const handleLogin = async ({ email, password }: LoginData) => {
    setLoading(true);
    try {
      await auth.signInWithEmailAndPassword(email, password);
      router.push("/");
    } catch (e) {
      setModal({ isOpen: true, type: "error", message: e?.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledFormHeading>sign in</StyledFormHeading>
      <StyledForm onSubmit={handleSubmit(handleLogin)}>
        <StyledLabel>
          <span className="sr-only">email</span>
          <StyledInput
            id="email"
            placeholder="Email"
            autoComplete="email"
            {...register("email", inputValidation.email)}
          />
          <StyledInputError>{errors?.email?.message}</StyledInputError>
        </StyledLabel>
        <StyledLabel>
          <span className="sr-only">password</span>
          <StyledInput
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            {...register("password", inputValidation.password)}
          />
          <StyledInputError>{errors?.password?.message}</StyledInputError>
        </StyledLabel>
        <StyledButton>sign in</StyledButton>
      </StyledForm>
      <StyledFormSignature>
        Haven't got an account?{" "}
        <Link href="/register">
          <StyledLink>Sign up</StyledLink>
        </Link>
      </StyledFormSignature>
    </StyledFormWrapper>
  );
};
