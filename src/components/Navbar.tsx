import { Box, Flex, Text, Image } from "@chakra-ui/react";
import logo from '../assets/sophia.svg';
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Box bg="primary" w="100%" p={4} color="white" position="sticky" top={0} zIndex={1000}>
        <RouterLink to="/">
          <Flex justify="center" align="center">
              <Image src={logo} alt="Twygo Select Logo" boxSize="80px" mr={2} />
              <Text fontSize="xl">Twygo Select</Text>
          </Flex>
        </RouterLink>
      </Box>
      <Box bg="gray.50" height="150px" />
    </>
  );
};

export default Navbar;