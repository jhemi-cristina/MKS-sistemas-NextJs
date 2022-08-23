import {
  Button,
  Container,
  HeaderLogo,
  Logo,
  LogoSubTitle,
  LogoTitle,
} from "./styles";
import { TiShoppingCart } from "react-icons/ti";

export default function Header() {
  return (
    <Container>
      <HeaderLogo>
        <Logo>
          <LogoTitle>MKS</LogoTitle>
          <LogoSubTitle>sistemas</LogoSubTitle>
        </Logo>
        <Button>
          <TiShoppingCart /> 0
        </Button>
      </HeaderLogo>
    </Container>
  );
}
