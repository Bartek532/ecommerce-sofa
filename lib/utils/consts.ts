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
    label: "yellow",
    color1: "fac623",
    color2: "eda600",
    color3: "f6bb00",
    color4: "de9400",
    color5: "cf8300",
  },
  { label: "red", color1: "e5383b" },
  {
    label: "green",
    color1: "80b918",
    color2: "2b9348",
    color3: "aacc00",
    color4: "55a630",
    color5: "0a6c2d",
  },
  { label: "blue", color1: "219ebc" },
  { label: "pink", color1: "ffafcc" },
];
