import { createContext, useContext, useState } from "react";
import type { Sofa } from "../types";
import {
  addProductToCart,
  removeProductFromCart,
  changeProductQuantity,
  calculateTotalCartItemsCost,
  calculateTotalCartItemsQuantity,
} from "../lib/utils/methods";

type CartContext = {
  cartItems: (Sofa & { quantity: number })[];
  handleAddToCart: (product: Sofa) => void;
  handleRemoveFromCart: (product: Sofa) => void;
  handleChangeProductQuantity: (product: Sofa, quantity: number) => void;
  getTotalCost: () => number;
  getTotalQuantity: () => number;
};

const CartContext = createContext<CartContext>({
  cartItems: [],
  handleAddToCart: () => {},
  handleRemoveFromCart: () => {},
  handleChangeProductQuantity: () => {},
  getTotalCost: () => 0,
  getTotalQuantity: () => 0,
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

  const handleChangeProductQuantity = (product: Sofa, quantity: number) => {
    setCartItems(cartItems =>
      changeProductQuantity(cartItems, product, quantity)
    );
  };

  const getTotalCost = () => {
    return calculateTotalCartItemsCost(cartItems);
  };

  const getTotalQuantity = () => {
    return calculateTotalCartItemsQuantity(cartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        handleAddToCart,
        handleRemoveFromCart,
        handleChangeProductQuantity,
        getTotalCost,
        getTotalQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
