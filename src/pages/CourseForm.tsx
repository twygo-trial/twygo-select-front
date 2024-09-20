import { useState } from 'react';
import { Box, Heading, FormControl, FormLabel, Input, Textarea, Button, useToast } from '@chakra-ui/react';
import { useNavigate, Link } from 'react-router-dom';
import env from '../env'; // Import environment variables

const CourseForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [endDate, setEndDate] = useState('');
  const toast = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCourse = {
      title,
      description,
      end_date: endDate
    };

    try {
      const response = await fetch(`${env.API_URL}/courses`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCourse),
      });

      if (!response.ok) {
        throw new Error(JSON.stringify(await response.json()));
      }

      toast({
        title: 'Curso cadastrado com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true,
        variant: 'solid'
      });

      // Navigate back to home after successful submission
      navigate('/');
    } catch (error) {
      toast({
        title: 'Erro ao cadastrar curso',
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        variant: 'solid'
      });
    }
  };

  return (
    <Box p={5}>
      <Heading mb={5}>Cadastrar Novo Curso</Heading>
      <form onSubmit={handleSubmit}>
        <FormControl id="title" mb={4} isRequired>
          <FormLabel>Título</FormLabel>
          <Input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite o título do curso"
          />
        </FormControl>

        <FormControl id="description" mb={4} isRequired>
          <FormLabel>Descrição</FormLabel>
          <Textarea
            placeholder="Digite a descrição do curso"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            resize="vertical"
            height="100px"
          />
        </FormControl>

        <FormControl id="end_date" mb={4} isRequired>
          <FormLabel>Data de Término</FormLabel>
          <Input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </FormControl>

        <Button colorScheme="teal" type="submit" mr={4}>
          Salvar
        </Button>
        <Button as={Link} to="/" colorScheme="gray">
          Voltar
        </Button>
      </form>
    </Box>
  );
};

export default CourseForm;
