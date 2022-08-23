import {
  Button,
  CardConfig,
  Container,
  Finalization,
  ImageProd,
  Price,
  Product,
  Qtd,
  Title,
  TitleImage,
  TotalPrice,
  Value,
} from "./styles";
import { AiFillCloseCircle } from "react-icons/ai";
import Card from "components/Card";
import { apple } from "assets/apple.svg";

export default function Cart({ handleModal, imageUrl, title, value }) {
  return (
    <Container>
      <Product>
        <Title>
          Carrinho <br />
          de compras
          <button onClick={handleModal}>
            <AiFillCloseCircle />
          </button>
        </Title>
        <Card>
          <CardConfig>
            <img src={imageUrl} width={50} height={50} />
            <TitleImage>{title}</TitleImage>
            <Qtd></Qtd>
            <Price>{value}</Price>
          </CardConfig>
        </Card>

        <Card>
          <CardConfig>
            <img src={imageUrl} width={50} height={50} />
            <TitleImage>{title}</TitleImage>
            <Qtd></Qtd>
            <Price>{value}</Price>
          </CardConfig>
        </Card>
      </Product>
      <Finalization>
        <TotalPrice>Total:</TotalPrice>
        <Value>R$799</Value>
      </Finalization>
      <Button>Finalizar Compra</Button>
    </Container>
  );
}
