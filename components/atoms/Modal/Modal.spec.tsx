import { screen, render } from "@testing-library/react";
import { Modal } from "./Modal";

test("modal should be closed by default", () => {
  render(<Modal />);
  expect(screen.queryByText(/close/i)).not.toBeInTheDocument();
});
