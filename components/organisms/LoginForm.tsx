import styled from "styled-components";
import { StyledInput } from "../atoms/Input/Input";
import { StyledButton } from "../atoms/Button/Button";
import { StyledInputError } from "../atoms/Input/InputError";
import { useForm } from "react-hook-form";
import { inputValidation } from "../../utils/consts";
import { LoginData } from "../../types";

const StyledLoginFormWrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  padding: 5rem 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: left;
  width: 100%;
`;

const StyledLabel = styled.label`
  margin: 1.2rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column wrap;
  max-width: 30rem;
`;

const StyledFormHeading = styled.h2`
  text-transform: uppercase;
  font-size: 3.9rem;
  margin-bottom: 3rem;
`;

export const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data: LoginData) => {
    console.log(data);
  };

  return (
    <StyledLoginFormWrapper>
      <StyledFormHeading>sign in</StyledFormHeading>
      <StyledForm onSubmit={handleSubmit(handleLogin)}>
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
            {...register("password", inputValidation.password)}
          />
          <StyledInputError>{errors?.password?.message}</StyledInputError>
        </StyledLabel>
        <StyledButton>sign in</StyledButton>
      </StyledForm>
    </StyledLoginFormWrapper>
  );
};
