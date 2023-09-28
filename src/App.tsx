import { Container, Box } from "@chakra-ui/react";
import Header from "./components/Header";
import Main from "./components/Main";

const App = () => {
  return (
    <Box as="div" minH="100vh" bg="gray.900" overflowY="auto">
      <Header />
      <Container
        maxW={{
          base: "container.md",
          lg: "container.lg",
          "2xl": "container.xl",
        }}
        my="14"
      >
        <Main />
      </Container>
    </Box>
  );
};

export default App;
