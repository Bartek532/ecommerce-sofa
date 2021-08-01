import { render, screen } from "@testing-library/react";
import React from "react";
import { CartList } from "./CartList";

test("when cartItems is empty properly message should be displayed", () => {
  render(<CartList cartItems={[]} />);
  expect(screen.getByText(/cart is empty/i)).toBeInTheDocument();
});

test("when cartItems is not empty list of items should be displayed", () => {
  const fakeCartItems = [
    {
      id: "1",
      name: "sofa",
      description: "sofa",
      cost: 120,
      sofaType: "2-seat",
      imgurl: "/sofa.jpg",
      quantity: 1,
    },
    {
      id: "2",
      name: "sofa",
      description: "sofa",
      cost: 120,
      sofaType: "2-seat",
      imgurl: "/sofa.jpg",
      quantity: 2,
    },
  ];

  render(<CartList cartItems={fakeCartItems} />);
  expect(screen.queryByText(/cart is empty/i)).not.toBeInTheDocument();
  expect(screen.getAllByTestId("cart-product")).toHaveLength(2);
});
