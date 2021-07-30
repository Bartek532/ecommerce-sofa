import { render, screen } from "@testing-library/react";
import { StripeButton } from "./StripeButton";

test("button should be disabled when nothing is in the basket (price = 0)", () => {
  render(<StripeButton price={0} />);
  expect(screen.getByRole("button", { name: /pay now/i })).toBeDisabled();
});

test("button shouldn be enabled when somthing is in the basket (price > 0)", () => {
  render(<StripeButton price={100} />);
  expect(screen.getByRole("button", { name: /pay now/i })).not.toBeDisabled();
});
