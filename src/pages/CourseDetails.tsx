import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Box, Button } from '@chakra-ui/react';
import VideoUpload from '../components/VideoUpload';
import VideoViewer from '../components/VideoViewer';
import env from '../env';

const CourseDetails = () => {
  const { courseId } = useParams();
  const [course, setCourse] = useState(null);
  const [videos, setVideos] = useState([]);
  const [current, setCurrent] = useState(null);

  const handleUpload = async (video) => setVideos([...videos, video]);
  const handleDeletion = async (videoId) => setVideos(videos.filter(video => video.id !== videoId));


  useEffect(() => {
    const fetchCourse = async () => {
      const response = await fetch(`${env.API_URL}/courses/${courseId}`);
      const data = await response.json();
      setCourse(data);
    };

    const fetchVideos = async () => {
      const response = await fetch(`${env.API_URL}/courses/${courseId}/videos`);
      const data = await response.json();
      setVideos(data);
      setCurrent(data[0]?.id);
    };

    fetchCourse();
    fetchVideos();
  }, [courseId]);

  if (!course) return <p>Carregando detalhes do curso...</p>;

  return (
    <Box p={5}>
      <h1>{course.title}</h1>
      <h2>{course.description}</h2>

      <VideoUpload courseId={courseId} courses={[course]} handleUpload={handleUpload} />

      <Button as={Link} to="/" colorScheme="gray">
        Voltar
      </Button>

      {videos.length > 0 && (
        <Box key={videos} mt={5}>
          <h3>Vídeos do Curso:</h3>
          {videos.map((video, index) => (
            <Button
              key={video.id}  
              bg={current === video.id ? 'primary' : 'gray.200'}
              m={0.5}
              onClick={() => setCurrent(video.id)}
            >
              {index}
            </Button>
          ))}
        </Box>
      )}

      <VideoViewer videoId={current} handleDeletion={handleDeletion}/>
    </Box>
  );
};

export default CourseDetails;