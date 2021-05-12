import { StyledInput } from "../atoms/Input/Input";
import { StyledButton } from "../atoms/Button/Button";
import { StyledInputError } from "../atoms/Input/InputError";
import { useForm } from "react-hook-form";
import { inputValidation } from "../../utils/consts";
import { RegisterData } from "../../types";
import Link from "next/link";
import { StyledLink } from "../atoms/Link/Link";
import { auth } from "../../firebase";

import {
  StyledFormWrapper,
  StyledFormHeading,
  StyledForm,
  StyledLabel,
  StyledFormSignature,
} from "./LoginForm";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = async ({ email, password }: RegisterData) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledFormHeading>sign up</StyledFormHeading>
      <StyledForm onSubmit={handleSubmit(handleRegister)}>
        <StyledLabel>
          <span className="sr-only">name</span>
          <StyledInput
            id="name"
            placeholder="Name"
            aria-label="name"
            aria-required="true"
            {...register("name", inputValidation.other)}
          />
          <StyledInputError>{errors?.name?.message}</StyledInputError>
        </StyledLabel>
        <StyledLabel>
          <span className="sr-only">email</span>
          <StyledInput
            id="email"
            placeholder="Email"
            aria-label="email"
            aria-required="true"
            {...register("email", inputValidation.email)}
          />
          <StyledInputError>{errors?.email?.message}</StyledInputError>
        </StyledLabel>
        <StyledLabel>
          <span className="sr-only">password</span>
          <StyledInput
            placeholder="Password"
            type="password"
            aria-label="password"
            aria-required="true"
            autoComplete="new-password"
            {...register("password", inputValidation.password)}
          />
          <StyledInputError>{errors?.password?.message}</StyledInputError>
        </StyledLabel>
        <StyledButton>sign up</StyledButton>
      </StyledForm>
      <StyledFormSignature>
        Already have an account?{" "}
        <Link href="/login">
          <StyledLink>Sign in</StyledLink>
        </Link>
      </StyledFormSignature>
    </StyledFormWrapper>
  );
};
