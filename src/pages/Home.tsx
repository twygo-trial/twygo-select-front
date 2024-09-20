import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, Stack, Button, useToast } from '@chakra-ui/react';
import env from '../env';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch(`${env.API_URL}/courses`);
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }
        const data = await response.json();
        setCourses(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  const handleDelete = async (courseId) => {
    try {
      const response = await fetch(`${env.API_URL}/courses/${courseId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Failed to delete course');

      // Remove the deleted course from state
      setCourses(courses.filter(course => course.id !== courseId));
      
      toast({
        title: 'Curso deletado com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true,
        variant: 'solid'
      });

    } catch (err) {
      setError(err.message);
      toast({
        title: 'Falhou ao deletar o curso!',
        status: 'error',
        duration: 3000,
        isClosable: true,
        variant: 'solid'
      });
    }
  };

  if (loading) return <Text>Loading...</Text>;
  if (error) return <Text>Error: {error}</Text>;

  return (
    <Box
      bg="white"
      p={8}
      rounded="md"
      shadow="lg"
      maxW="lg"
      textAlign="center"
    >
      <Button m={5} as={Link} to="/novo-curso" colorScheme="teal">
        Adicionar Curso
      </Button>
      <Heading mb={5}>Cursos Ativos</Heading>
      <Stack key={courses} spacing={4}>
        {courses.map((course) => (
          <Box key={course.id} borderWidth="1px" borderRadius="lg" p={4}>
            <Link to={`/courses/${course.id}`} style={{ textDecoration: 'none' }}>
              <Heading size="md"><b>{course.title}</b></Heading>
              <Text>{course.description}</Text>
              <Text>Tamanho em bytes: {course.video_size}</Text>
              <Text>Expiração do curso: {course.end_date}</Text>
            </Link>
            <Button colorScheme="red" mt={2} onClick={() => handleDelete(course.id)}>
              Deletar Curso
            </Button>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default Home;
