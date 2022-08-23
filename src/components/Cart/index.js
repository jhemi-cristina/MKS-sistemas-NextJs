import { Button, Container, Product, Title, TotalPrice } from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";
import Card from "components/Card";

export default function Cart({ handleModal }) {
  return (
    <Container>
      <Product>
        <Title>
          Carrinho de compras
          <button onClick={handleModal}>
            <AiFillCloseCircle />
          </button>
        </Title>
        <Card></Card>
        <TotalPrice></TotalPrice>
      </Product>
      <Button></Button>
    </Container>
  );
}
