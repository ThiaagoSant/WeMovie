import {
  Wrapper,
  WrapperCart,
  Logo,
  Section,
} from "../styles/components/Header";
import CartIcon from "../assets/icons/cartIcon.svg";
import { useNavigate } from "react-router-dom";
import { RoutesEnum } from "../types/enums";
import { useCart } from "../Hooks/useCart";

const Header = () => {
  const { state } = useCart();
  const navigate = useNavigate();

  const quantityItems = state.items.length;

  const goToHome = () => navigate(RoutesEnum.Home);

  const goToCart = () => navigate(RoutesEnum.Cart)
  
  return (
    <Section>
      <Wrapper>
        <Logo onClick={goToHome}>WeMovies</Logo>

        <WrapperCart onClick={goToCart}>
          <div>
            <p>Meu Carrinho</p>
            <span>{quantityItems} itens</span>
          </div>
          <img src={CartIcon} />
        </WrapperCart>
      </Wrapper>
    </Section>
  );
};

export default Header;
