import {
  ButtonEmptyCart,
  CartEmptyImg,
  Container,
} from "../styles/components/EmptyCart";

const EmptyCart = () => {
  return (
    <Container>
      <div>
        <h1>Parece que não há nada por aqui :(</h1>

        <CartEmptyImg />
        <ButtonEmptyCart to="/">Recarregar página</ButtonEmptyCart>
      </div>
    </Container>
  );
};

export default EmptyCart;
