import { render, screen } from "@testing-library/react";
import React from "react";
import { ProductsList } from "./ProductsList";

test("when products is empty properly message should be displayed", () => {
  render(<ProductsList products={[]} />);
  expect(
    screen.getByText(/no products matches your search/i)
  ).toBeInTheDocument();
});

test("when products is not empty list of items should be displayed", () => {
  const fakeCartItems = [
    {
      id: "1",
      name: "sofa",
      description: "sofa",
      cost: 120,
      sofaType: "2-seat",
      imgurl: "/sofa.jpg",
    },
    {
      id: "2",
      name: "sofa",
      description: "sofa",
      cost: 120,
      sofaType: "2-seat",
      imgurl: "/sofa.jpg",
    },
  ];

  render(<ProductsList products={fakeCartItems} />);
  expect(screen.queryByText(/cart is empty/i)).not.toBeInTheDocument();
  expect(screen.getAllByTestId("product-tile")).toHaveLength(2);
});
