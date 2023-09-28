import { Box, Flex, Heading } from "@chakra-ui/react";
import PropertySearchForm from "./PropertySearchForm";
import PropertyLists from "./PropertyLists";

const Main = () => {
  return (
    <main className="main">
      <Flex direction="column" my="16" gap="6">
        <Box>
          <Heading as="h2" size="lg">
            Search Properties for Rent
          </Heading>
        </Box>
        <Box>
          <PropertySearchForm />
        </Box>
        <Box>
          <PropertyLists />
        </Box>
      </Flex>
    </main>
  );
};

export default Main;
