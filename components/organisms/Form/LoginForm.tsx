import { StyledInput } from "components/atoms/Input/Input.styles";
import { StyledButton } from "components/atoms/Button/Button.styles";
import { StyledInputError } from "components/atoms/Input/InputError.styles";
import { useForm } from "react-hook-form";
import { inputValidation } from "lib/utils/consts";
import { UserData } from "types";
import Link from "next/link";
import { StyledLink } from "components/atoms/Link/Link.styles";
import { auth } from "lib/firebase";
import { useMainContext } from "context/MainContext";
import {
  StyledFormWrapper,
  StyledFormHeading,
  StyledForm,
  StyledLabel,
  StyledFormSignature,
} from "./Form.styles";
import { useEffect } from "react";

import { useRouter } from "next/router";

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    auth.signOut();
  }, []);

  const router = useRouter();

  const { setLoading, setModal } = useMainContext();

  const handleLogin = async ({ email, password }: UserData) => {
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
          <StyledInputError role="alert">
            {errors?.email?.message}
          </StyledInputError>
        </StyledLabel>
        <StyledLabel>
          <span className="sr-only">password</span>
          <StyledInput
            placeholder="Password"
            type="password"
            autoComplete="current-password"
            {...register("password", inputValidation.password)}
          />
          <StyledInputError role="alert">
            {errors?.password?.message}
          </StyledInputError>
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
