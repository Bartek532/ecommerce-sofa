import { screen, render } from "@testing-library/react";
import { Hero } from "./Hero";

test("when isHome is true (default behavior) HeroLink should be rendered", () => {
  render(<Hero />);
  expect(screen.getByText(/furniture\?/i)).toBeInTheDocument();
});

test("when isHome is false HeroLink should not be rendered", () => {
  render(<Hero isHome={false} />);
  expect(screen.queryByText(/furniture\?/i)).not.toBeInTheDocument();
  expect(
    screen.getByRole("button", { name: /arrow-left/i })
  ).toBeInTheDocument();
});
