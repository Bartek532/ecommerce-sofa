import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ProductDescription } from "./ProductDescription";

test("when color is changed page should be scrolled to the top", () => {
  const fakeProduct = {
    id: "1",
    name: "Sofa",
    description: "sofa",
    cost: 120,
    sofaType: "2-seat",
    imgurl: "/sofa.jpg",
  };
  const scroll = jest.spyOn(window, "scrollTo");
  render(<ProductDescription product={fakeProduct} />);
  userEvent.click(screen.getByLabelText(/green/i));

  expect(scroll).toHaveBeenCalled();
  expect(scroll).toHaveBeenCalledWith(0, 0);
});
