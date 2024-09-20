import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Flex, Box } from '@chakra-ui/react';
import Navbar from "../components/Navbar";
import Home from '../pages/Home';
import CourseForm from '../pages/CourseForm';
import CourseDetails from '../pages/CourseDetails';


const AppRoutes = () => {
  return (
    <Router>
      <Navbar />
      <Flex
        direction="column"
        align="center"
        justify="center"
        height="100vh"
        width="100vw"
        bg="gray.50"
        p={4}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo-curso" element={<CourseForm />} />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
        </Routes>
      </Flex>
    </Router>
  );
};

export default AppRoutes;