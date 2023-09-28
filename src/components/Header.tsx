import { Box, Button, Heading, useDisclosure } from "@chakra-ui/react";
import LoginModal from "./modals/LoginModal";
import SignupModal from "./modals/SignupModal";

const Header = () => {
  const {
    isOpen: isLoginModalOpen,
    onClose: closeLoginModal,
    onOpen: openLoginModal,
  } = useDisclosure();
  const {
    isOpen: isSignupModalOpen,
    onClose: closeSignupModal,
    onOpen: openSignupModal,
  } = useDisclosure();
  return (
    <>
      <Box
        as="nav"
        display="flex"
        px={24}
        py={6}
        justifyContent="space-between"
        color="white"
        borderBottom="1px"
        borderColor="gray.700"
        boxShadow={"0px 0px 20px 0px #272727"}
      >
        <>
          <Heading
            as="h3"
            size="xl"
            mr="20"
            bgGradient={
              "linear-gradient(rgb(56, 189, 248), rgb(186, 230, 253))"
            }
            bgClip="text"
          >
            PropFinder
          </Heading>
        </>
        <Box as="div" display="flex" gap={3}>
          <Button colorScheme="teal" onClick={openLoginModal}>
            Login
          </Button>
          <Button colorScheme="blue" onClick={openSignupModal}>
            Signup
          </Button>
        </Box>
      </Box>
      {isLoginModalOpen && (
        <LoginModal
          heading={"Login Form"}
          isOpen={isLoginModalOpen}
          onClose={closeLoginModal}
        />
      )}
      {isSignupModalOpen && (
        <SignupModal
          heading="Signup Form"
          isOpen={isSignupModalOpen}
          onClose={closeSignupModal}
        />
      )}
    </>
  );
};

export default Header;
