import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Heading, Text, Stack, Button } from '@chakra-ui/react';
import env from '../env';

const Home = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const today = new Date();

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
      <Heading mb={5}>Cursos Ativos</Heading>
      <Stack spacing={4}>
        {courses
          .map((course) => (
            <Box key={course.id} borderWidth="1px" borderRadius="lg" p={4}>
              <Heading size="md"><b>{course.title}</b></Heading>
              <Text>{course.description}</Text>
              <Text>Tamanho em bytes: {course.video_size}</Text>
              <Text>Expiração do curso: {course.end_date}</Text>
            </Box>
          ))}
      </Stack>
      <Button mt={5} as={Link} to="/novo-curso" colorScheme="teal">
        Adicionar Curso
      </Button>
    </Box>
  );
};

export default Home;