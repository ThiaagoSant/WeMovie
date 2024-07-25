import { useNavigate } from "react-router-dom";

import purchaseImg from "../assets/imgs/purchase.svg";
import Button from "../components/Button";
import {
  Container,
  PurchaseButton,
  PurchaseImg,
} from "../styles/pages/PurchasePage";
import { RoutesEnum } from "../types/enums";

const PurchasePage = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate(RoutesEnum.Home);
  };

  return (
    <Container>
      <div>
        <h1>Compra realizada com sucesso!</h1>

        <PurchaseImg src={purchaseImg} alt="Imagem de compra concluída" />

        <PurchaseButton>
          <Button onClick={goToHome}>Voltar</Button>
        </PurchaseButton>
      </div>
    </Container>
  );
};

export default PurchasePage;
