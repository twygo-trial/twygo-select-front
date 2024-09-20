import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Select,
  Input,
  Heading,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  useToast
} from '@chakra-ui/react';
import env from '../env';

const VideoUpload = ({ courseId, courses, handleUpload}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [file, setFile] = useState(null);
  const toast = useToast();

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('video[file]', file);
    formData.append('video[course_id]', courseId);

    try {
      const response = await fetch(`${env.API_URL}/courses/${courseId}/videos`, {
        method: 'POST',
        body: formData,
      });

      const video = await response.json();
      handleUpload(video);

      if (!response.ok) throw new Error('Failed to upload video');

      toast({
        title: 'Video carregado com sucesso!',
        status: 'success',
        duration: 3000,
        isClosable: true,
        variant: 'solid'
      });
      onClose(); // Close the modal after success
    } catch (error) {
      console.error('Error uploading video:', error);
      alert('Error uploading video');
    }
  };

  return (
    <>
      <Button m={10} onClick={onOpen}>
        Upload Vídeo
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Upload de Vídeo</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit}>
              <FormControl mb={4}>
                <FormLabel>Selecione o vídeo:</FormLabel>
                <Input type="file" accept="video/*" onChange={handleFileChange} required />
              </FormControl>
              <FormControl mb={4}>
                <FormLabel>Curso:</FormLabel>
                <Select value={courseId} isReadOnly>
                  {courses.map(course => (
                    <option key={course.id} value={course.id}>{course.title}</option>
                  ))}
                </Select>
              </FormControl>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleSubmit}>
              Enviar
            </Button>
            <Button onClick={onClose} colorScheme="gray" ml={3}>
              Cancelar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default VideoUpload;
