import { Box, Heading, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const CourseForm = () => {
  return (
    <Box p={5}>
      <Heading mb={5}>Cadastrar Novo Curso</Heading>
      <FormControl id="title" mb={4}>
        <FormLabel>Título</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl id="description" mb={4}>
        <FormLabel>Descrição</FormLabel>
        <Input type="text" />
      </FormControl>

      <FormControl id="endDate" mb={4}>
        <FormLabel>Data de Término</FormLabel>
        <Input type="date" />
      </FormControl>

      <Button colorScheme="teal" type="submit" mr={4}>
        Salvar
      </Button>
      <Button as={Link} to="/" colorScheme="gray">
        Voltar
      </Button>
    </Box>
  );
};

export default CourseForm;