import { Box, Flex, Text, Image } from "@chakra-ui/react";
import logo from '../assets/sophia.svg';
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="primary" w="100%" p={4} color="white">
      <RouterLink to="/">
        <Flex justify="center" align="center">
            <Image src={logo} alt="Twygo Select Logo" boxSize="80px" mr={2} />
            <Text fontSize="xl">Twygo Select</Text>
        </Flex>
      </RouterLink>
    </Box>
  );
};

export default Navbar;