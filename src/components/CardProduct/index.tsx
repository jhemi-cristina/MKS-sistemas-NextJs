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
import apple from "assets/apple.svg";
import { FiShoppingBag } from "react-icons/fi";

interface ICardProduct {
  title: string;
  imageUrl: string;
  price: number;
  description: string;
}

export default function CardProduct({
  title,
  imageUrl,
  price,
  description,
}: ICardProduct) {
  return (
    <Container>
      <Products>
        <ImageProduct src={apple} alt="Relógio" />
        <Price>
          <ProductTitle>{title}</ProductTitle>
          <Value>{price}</Value>
        </Price>
        <Description>{description}</Description>
      </Products>
      <Button>
        <FiShoppingBag /> COMPRAR
      </Button>
    </Container>
  );
}
