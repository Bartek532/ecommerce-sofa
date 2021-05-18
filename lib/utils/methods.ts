import type { Sofa } from "../../types";

export const addProductToCart = (
  cartItems: (Sofa & { quantity: number })[],
  productToAdd: Sofa
) => {
  if (cartItems.reduce((acc, { quantity }) => acc + quantity, 0) === 99) {
    return cartItems;
  }
  const isProductInCart = cartItems.find(({ id }) => id === productToAdd.id);

  if (isProductInCart) {
    return cartItems.map(cartItem => {
      return productToAdd.id === cartItem.id
        ? { ...productToAdd, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

export const removeProductFromCart = (
  cartItems: (Sofa & { quantity: number })[],
  productToRemove: Sofa
) => {
  const isProductInCart = cartItems.find(({ id }) => id === productToRemove.id);

  if (isProductInCart?.quantity === 1) {
    return cartItems.filter(({ id }) => id !== productToRemove.id);
  }

  return cartItems.map(cartItem => {
    return cartItem.id === productToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem;
  });
};
