import { useEffect, useRef, useState } from 'react';
import { Box, Heading, Spinner, Button, useToast } from '@chakra-ui/react';
import env from '../env';

const VideoViewer = ({ videoId, handleDeletion }) => {
  const [videoUrl, setVideoUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const toast = useToast();
  const videoRef = useRef(null);

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        if (!videoId) return;
        const response = await fetch(`${env.API_URL}/videos/${videoId}`);
        if (!response.ok) throw new Error('Falha ao obter vídeo');
        const data = await response.json();
        setVideoUrl(data.video_url);
      } catch (error) {
        console.error('Erro ao obter o vídeo', error);
        toast({
          title: `Erro ao obter video ${error.message}`,
          description: error.message,
          status: 'error',
          duration: 3000,
          isClosable: true,
          variant: 'solid'
        });
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [videoId]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load(); // Reload the video when videoUrl changes
    }
  }, [videoUrl]);

  const handleDelete = async () => {
    try {
      const response = await fetch(`${env.API_URL}/videos/${videoId}`, {
        method: 'DELETE',
      });

      if (!response.ok) throw new Error('Falha ao deletar o vídeo');

      handleDeletion(videoId);
      setVideoUrl(null); // Clear the video URL after deletion
      toast({
        title: `Sucesso ao deletar o video!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
        variant: 'solid'
      });
    } catch (error) {
      console.error('Erro ao deletar o vídeo', error);
      toast({
        title: `Erro ao obter video`,
        description: error.message,
        status: 'error',
        duration: 3000,
        isClosable: true,
        variant: 'solid'
      });
    }
  };

  if (loading) return <Spinner />;
  
  return (
    <Box>
      <Heading mb={5}>Visualizar Vídeo</Heading>
      {videoUrl ? (
        <Box>
          <video ref={videoRef} controls>
            <source src={videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <Button colorScheme="red" mt={4} onClick={handleDelete}>
            Deletar Vídeo
          </Button>
        </Box>
      ) : (
        <p>Nenhum vídeo encontrado</p>
      )}
    </Box>
  );
};

export default VideoViewer;
