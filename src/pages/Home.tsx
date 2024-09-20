import { Box, Heading, Text, Stack, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  const courses = [
    { id: 1, title: 'Curso de React', description: 'Aprenda React do básico ao avançado.', endDate: '2024-12-31' },
    { id: 2, title: 'Curso de TypeScript', description: 'Domine TypeScript em projetos reais.', endDate: '2024-09-30' },
  ];

  const today = new Date();

  return (
    <Box p={5}>
      <Heading mb={5}>Cursos Ativos</Heading>
      <Stack spacing={4}>
        {courses
          .filter((course) => new Date(course.endDate) > today)
          .map((course) => (
            <Box key={course.id} borderWidth="1px" borderRadius="lg" p={4}>
              <Heading size="md">{course.title}</Heading>
              <Text>{course.description}</Text>
            </Box>
          ))}
      </Stack>
      <Button mt={5} as={Link} to="/new-course" colorScheme="teal">
        Adicionar Curso
      </Button>
    </Box>
  );
};

export default Home;