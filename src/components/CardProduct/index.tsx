import {
  Button,
  Container,
  Description,
  ImageProduct,
  Price,
  Products,
  ProductTitle,
  Value,
} from "./styles";
import apple from "Assets/apple.svg";
import { FiShoppingBag } from "react-icons/fi";

interface ICardProduct {
  title: string;
}

export default function CardProduct({ title }: ICardProduct) {
  return (
    <Container>
      <Products>
        <ImageProduct src={apple} alt="Relógio" />
        {/* <img src={apple} alt="Relógio" /> */}
        <Price>
          <ProductTitle>{title}</ProductTitle>
          <Value>R$399</Value>
        </Price>
        <Description>
          Redesigned from scratch and completely revised.
        </Description>
      </Products>
      <Button>
        <FiShoppingBag /> COMPRAR
      </Button>
    </Container>
  );
}
