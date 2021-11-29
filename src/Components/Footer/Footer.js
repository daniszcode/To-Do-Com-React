import { Container, Image, Text } from "./Style";
import Logo from "../../Assets/logo.svg";

const Footer = () => {
  return (
    <Container>
      <Image src={Logo} />
      <Text>Desenvolvido por Daniele Marques - Reprograma</Text>
    </Container>
  );
};

export { Footer };
