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
} from "../Form.styles";

export const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const { setLoading, setModal } = useMainContext();

  const handleRegister = async ({ email, password }: UserData) => {
    setLoading(true);
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      setModal({
        isOpen: true,
        type: "success",
        message: "Account was created. Log in!",
      });
      reset();
    } catch (e) {
      setModal({ isOpen: true, type: "error", message: e?.message });
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledFormWrapper>
      <StyledFormHeading>sign up</StyledFormHeading>
      <StyledForm onSubmit={handleSubmit(handleRegister)}>
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
