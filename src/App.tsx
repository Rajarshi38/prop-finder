import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <Box as="div" minH="100vh" bg="gray.900">
      <Header />
      <Container maxW="container.xl">
        <Main />
      </Container>
    </Box>
  );
};

export default App;
