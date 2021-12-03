import { Link } from "react-router-dom";
import { Container, Box, Option, Ancor } from "./Style";

const Navbar = () => {
  return (
    <>
      <Container>
        <Box>
          <Option>
            <Link to="/">
              <Ancor href="#Header">Inicio</Ancor>
            </Link>
          </Option>
          <Option>
            <Link to="/">
              <Ancor href="List">To-Do</Ancor>
            </Link>
          </Option>
          <Option>
            <Link to="/sobre">Autora</Link>
          </Option>
          <Option>
            <Ancor href="https://github.com/daniszcode">Contato</Ancor>
          </Option>
        </Box>
      </Container>
    </>
  );
};

export { Navbar };
