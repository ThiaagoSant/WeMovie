import { Movie } from "../models/Movie";
import { useCart } from "../Hooks/useCart";

import { Box } from "../styles/components/MovieCard";
import Button from "./Button";
import AddShopingcartIcon from "../assets/icons/addshoppingcart.svg";

interface MovieCardProps {
  movie: Movie;
}

const MovieCard = ({ movie }: MovieCardProps) => {
  const { state, dispatch } = useCart();

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", movie });
  };

  const quantity = state.items.find((item) => item.id === movie.id)?.quantity;

  const formattedPrice = movie.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <Box>
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{formattedPrice}</p>
      <Button variant={!quantity ? "primary" : "success"} onClick={addToCart}>
        <div>
          <img src={AddShopingcartIcon} />
          <span>{quantity ?? 0}</span>
        </div>

        <p>ADICIONAR AO CARRINHO</p>
      </Button>
    </Box>
  );
};

export default MovieCard;
