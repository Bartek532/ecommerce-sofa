export const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const PASSWORD_REGEX =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;

export const inputValidation = {
  email: {
    required: { value: true, message: "Email is required." },
    pattern: {
      value: EMAIL_REGEX,
      message: "Email must be a valid email.",
    },
  },
  password: {
    required: { value: true, message: "Password is required." },
    pattern: {
      value: PASSWORD_REGEX,
      message:
        "Password must contain an uppercase letter, a special character, a number and must be at least 8 characters long.",
    },
  },
  other: {
    required: { value: true, message: "This field is required." },
    minLength: {
      value: 3,
      message: "This field must be at least 3 characters. ",
    },
  },
};

export const sofaColors = [
  {
    label: "yellow" as const,
    palette: {
      main: "fac623",
      leftPillow: "eda600",
      rightPillow: "f6bb00",
      backrest: "de9400",
      dots: "cf8300",
    },
  },
  {
    label: "red" as const,
    palette: {
      main: "e5383b",
      leftPillow: "ba181b",
      rightPillow: "e74a4d",
      backrest: "eb3134",
      dots: "a4161a",
    },
  },
  {
    label: "green" as const,
    palette: {
      main: "80b918",
      leftPillow: "2b9348",
      rightPillow: "aacc00",
      backrest: "55a630",
      dots: "0a6c2d",
    },
  },
  {
    label: "blue" as const,
    palette: {
      main: "219ebc",
      leftPillow: "126782",
      rightPillow: "8ecae6",
      backrest: "0096c7",
      dots: "0a4c65",
    },
  },
];
