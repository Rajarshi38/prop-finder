import { lazy, Suspense, useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";
import { Bars3Icon } from "../icons/Icons";
import { useAtom } from "jotai";
import userAtom from "../store/userAtom";
import { logoutUser } from "../service/service";
const LoginModal = lazy(() => import("./modals/LoginModal"));
const SignupModal = lazy(() => import("./modals/SignupModal"));

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

  const [user, setUser] = useAtom(userAtom);

  useEffect(() => {
    if (user) {
      closeLoginModal();
      closeSignupModal();
    }
  }, [user, closeLoginModal, closeSignupModal]);

  const logout = async () => {
    await logoutUser();
    setUser(null);
  };

  const [isMediumScreen] = useMediaQuery("(min-width: 992px)");
  return (
    <header>
      <Box
        as="nav"
        display="flex"
        px={{
          base: "6",
          md: "10",
          lg: "18",
          xl: "20",
          "2xl": "24",
        }}
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
        {isMediumScreen ? (
          <Box as="div" display="flex" gap={3}>
            {user ? (
              <Button colorScheme="teal" onClick={logout}>
                Logout
              </Button>
            ) : (
              <>
                <Button colorScheme="teal" onClick={openLoginModal}>
                  Login
                </Button>
                <Button colorScheme="blue" onClick={openSignupModal}>
                  Signup
                </Button>
              </>
            )}
          </Box>
        ) : (
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="responsive menu"
              variant="outline"
              colorScheme="twitter"
            >
              <Center>
                <Icon as={Bars3Icon} />
              </Center>
            </MenuButton>
            <MenuList bg="gray.700">
              {user ? (
                <>
                  <MenuItem bg="gray.700" color="white">
                    {user.name}
                  </MenuItem>
                  <MenuItem bg="gray.700" color="white" onClick={logout}>
                    Logout
                  </MenuItem>
                </>
              ) : (
                <>
                  <MenuItem
                    bg="gray.700"
                    color="white"
                    onClick={openLoginModal}
                  >
                    Login
                  </MenuItem>
                  <MenuItem
                    bg="gray.700"
                    color="white"
                    onClick={openSignupModal}
                  >
                    Signup
                  </MenuItem>
                </>
              )}
            </MenuList>
          </Menu>
        )}
      </Box>
      {isLoginModalOpen && (
        <Suspense>
          <LoginModal
            heading={"Login Form"}
            isOpen={isLoginModalOpen}
            onClose={closeLoginModal}
          />
        </Suspense>
      )}
      {isSignupModalOpen && (
        <Suspense>
          <SignupModal
            heading="Signup Form"
            isOpen={isSignupModalOpen}
            onClose={closeSignupModal}
          />
        </Suspense>
      )}
    </header>
  );
};

export default Header;
