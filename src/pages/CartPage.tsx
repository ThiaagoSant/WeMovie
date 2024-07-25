import CartList from "../components/CartList";
import EmptyCart from "../components/EmptyCart";
import { useCart } from "../Hooks/useCart";

const CartPage = () => {
  const { state } = useCart();

  if (state.items.length === 0) return <EmptyCart />;
  
  return <CartList />;
};

export default CartPage;
