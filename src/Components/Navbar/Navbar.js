import { Container, Box, Option, Ancor } from "./Style";

const Navbar = () => {
  return (
    <>
      <Container>
        <Box>
          <Option>
            <Ancor href="#Header">Inicio</Ancor>
          </Option>
          <Option>
            <Ancor href="List">To-Do</Ancor>
          </Option>
          <Option>
            <Ancor href="Autora">Autora</Ancor>
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
