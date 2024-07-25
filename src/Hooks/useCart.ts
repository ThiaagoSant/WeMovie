import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { CartAction, CartState } from "../types/types";

export const useCart = (): {
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
} => {
  return useContext(CartContext);
};
