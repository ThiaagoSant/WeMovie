import { Movie } from "../models/Movie";

export interface CartState {
  items: Movie[];
  total: number;
}

export type CartAction =
  | { type: "ADD_TO_CART"; movie: Movie }
  | { type: "UPDATE_QUANTITY"; movieId: number; quantity: number }
  | { type: "REMOVE_FROM_CART"; movieId: number }
  | { type: "CLEAR_CART" };
