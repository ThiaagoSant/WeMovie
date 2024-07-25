import {
  ListContainer,
  ListContent,
  PriceContent,
} from "../styles/components/CartList";
import Button from "./Button";
import { useCart } from "../Hooks/useCart";
import CartCard from "./CartCard";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../types/enums";

const CartList = () => {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const total = state.total.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const renderCartCards = state?.items?.map((movie) => (
    <CartCard key={movie.id} movie={movie} />
  ));

  const goToPurchasePage = () => {
    dispatch({ type: "CLEAR_CART" });
    navigate(RoutesEnum.Purchase);
  };

  return (
    <ListContainer>
      <main>
        <ul>
          <li>produto</li>
          <li>qtd</li>
          <li>subtotal</li>
        </ul>

        <ListContent>{renderCartCards}</ListContent>

        <footer>
          <Button onClick={goToPurchasePage}>Finalizar pedido</Button>
          <PriceContent>
            <p>total</p>
            <span>{total}</span>
          </PriceContent>
        </footer>
      </main>
    </ListContainer>
  );
};

export default CartList;
