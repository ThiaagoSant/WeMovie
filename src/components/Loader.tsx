import { Container } from "../styles/components/Loader";
import LoaderIcon from "../assets/imgs/loader.png";

const Loader = () => {
  return (
    <Container>
      <img src={LoaderIcon} />
    </Container>
  );
};

export default Loader;
