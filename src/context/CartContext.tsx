import React, { createContext, useReducer, ReactNode } from "react";
import { CartAction, CartState } from "../types/types";

const initialState: CartState = {
  items: [],
  total: 0,
};

const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({
  state: initialState,
  dispatch: () => null,
});

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.id === action.movie.id
      );
      let updatedItems;
      if (existingItem) {
        updatedItems = state.items.map((item) =>
          item.id === action.movie.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        updatedItems = [...state.items, { ...action.movie, quantity: 1 }];
      }
      const newTotal = state.total + action.movie.price;
      return { items: updatedItems, total: newTotal };
    }
    case "REMOVE_FROM_CART": {
      const filteredItems = state.items.filter(
        (item) => item.id !== action.movieId
      );
      const removedItem = state.items.find(
        (item) => item.id === action.movieId
      );
      const updatedTotal =
        state.total -
        (removedItem ? removedItem.price * removedItem.quantity : 0);
      return { items: filteredItems, total: updatedTotal };
    }
    case "UPDATE_QUANTITY": {
      const updatedItems = state.items.map((item) =>
        item.id === action.movieId
          ? { ...item, quantity: action.quantity }
          : item
      );
      const updatedTotal = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
      return { items: updatedItems, total: updatedTotal };
    }
    case "CLEAR_CART": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export const CartProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
