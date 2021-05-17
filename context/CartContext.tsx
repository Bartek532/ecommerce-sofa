import { createContext, useContext, useState } from "react";
import type { Sofa } from "../types";
import {
  addProductToCart,
  removeProductFromCart,
} from "../lib/utils/functions";

type CartContext = {
  cartItems: (Sofa & { quantity: number })[];
  handleAddToCart: (product: Sofa) => void;
  handleRemoveFromCart: (product: Sofa) => void;
};

const CartContext = createContext<CartContext>({
  cartItems: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
});

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("Error while reading context!");
  }

  return context;
};

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<(Sofa & { quantity: number })[]>(
    []
  );

  const handleAddToCart = (product: Sofa) => {
    setCartItems(cartItems => addProductToCart(cartItems, product));
  };

  const handleRemoveFromCart = (product: Sofa) => {
    setCartItems(cartItems => removeProductFromCart(cartItems, product));
  };

  return (
    <CartContext.Provider
      value={{ cartItems, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
