import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CourseForm from '../pages/CourseForm';
import Navbar from "../components/Navbar";
import { Flex } from '@chakra-ui/react';

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
        overflow="hidden"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/novo-curso" element={<CourseForm />} />
        </Routes>
      </Flex>
    </Router>
  );
};

export default AppRoutes;