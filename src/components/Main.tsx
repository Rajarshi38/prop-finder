import { Box, Flex, Heading } from "@chakra-ui/react";
import PropertySearchForm from "./PropertySearchForm";
import PropertyLists from "./PropertyLists";

const Main = () => {
  return (
    <main className="main">
      <Flex direction="column" gap="6">
        <Box>
          <Heading as="h2" size="lg">
            Search Properties for Rent
          </Heading>
        </Box>
        <Box>
          <PropertySearchForm />
        </Box>
        <Box mb="5" mt="18">
          <PropertyLists />
        </Box>
      </Flex>
    </main>
  );
};

export default Main;
