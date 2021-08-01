import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Cart } from "./Cart";

test("Cart should be closed by default", () => {
  render(<Cart />);
  expect(screen.queryByText(/checkout/i)).not.toBeInTheDocument();
});

test("when basket icon was clicked cart should open", () => {
  render(<Cart />);
  userEvent.click(screen.getByRole("button", { name: /cart/i }));
  expect(screen.queryByText(/checkout/i)).toBeInTheDocument();
});
