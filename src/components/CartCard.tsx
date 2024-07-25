import { Movie } from "../models/Movie";
import { Col1, Col2, Col3, Col4 } from "../styles/components/CartCard";

import addIcon from "../assets/icons/addIcon.svg";
import removeIcon from "../assets/icons/removeIcon.svg";
import trashIcon from "../assets/icons/trashIcon.svg";
import { useCart } from "../Hooks/useCart";

interface CartCardProps {
  movie: Movie;
}

const CartCard = ({ movie }: CartCardProps) => {
  const { state, dispatch } = useCart();
  const formattedPrice = movie.price.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const quantity = state.items.find((item) => item.id === movie.id)?.quantity;

  const formattedSubtotal =
    quantity &&
    (movie.price * quantity).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  const handleRemoveFromCart = (movieId: number) => {
    dispatch({ type: "REMOVE_FROM_CART", movieId });
  };

  const handleUpdateQuantity = (movieId: number, quantity: number) => {
    if (quantity > 0) {
      dispatch({ type: "UPDATE_QUANTITY", movieId, quantity });
    } else {
      handleRemoveFromCart(movieId);
    }
  };

  return (
    <Col1>
      <img src={movie.image} />
      <div>
        <h3>{movie.title}</h3>
        <p>{formattedPrice}</p>
      </div>
      <Col2>
        <img
          onClick={() => handleUpdateQuantity(movie.id, movie.quantity - 1)}
          src={removeIcon}
        />
        <div>{movie.quantity}</div>
        <img
          onClick={() => handleUpdateQuantity(movie.id, movie.quantity + 1)}
          src={addIcon}
        />
      </Col2>

      <Col3>
        <span>subtotal</span>
        {formattedSubtotal}
      </Col3>
      <Col4>
        <p>{formattedPrice}</p>
        <img onClick={() => handleRemoveFromCart(movie.id)} src={trashIcon} />
      </Col4>
    </Col1>
  );
};

export default CartCard;
